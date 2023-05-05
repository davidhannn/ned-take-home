"use client";
import axios from "axios";
import Image from "next/image";
import Finance from "@/components/finance";
import Results from "@/components/results";
import Header from "@/components/header";
import "@/app/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import variables from "../styles/variables.module.scss";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { CARDTYPES, REVENUE_SHARED_FREQUENCY } from "@/constants/enums";

interface IFinanceContext {
  financeData: {};
  revenueAmount: number;
  fundingAmount: number;
  fundReasons: null | [];
  revenueSharedFrequency: REVENUE_SHARED_FREQUENCY;
  desiredRepaymentDelay: number;
  totalRevenueShare: number;
  setFundingAmount: Dispatch<SetStateAction<number>>;
  setRevenueAmount: Dispatch<SetStateAction<number>>;
  setRevenueSharedFrequency: Dispatch<SetStateAction<string>>;
  setDesiredRepaymentDelay: Dispatch<SetStateAction<number>>;
  setTotalRevenueShare: Dispatch<SetStateAction<number>>;
  handleRevenueInput: Dispatch<SetStateAction<number>>;
  handleFundingAmount: Dispatch<SetStateAction<number>>;
}

export const FinanceContext = createContext<IFinanceContext>({
  financeData: {},
  revenueAmount: 0,
  fundingAmount: 0,
  fundReasons: null,
  revenueSharedFrequency: REVENUE_SHARED_FREQUENCY.MONTHLY,
  desiredRepaymentDelay: 30,
  totalRevenueShare: 0,
  setFundingAmount: () => {},
  setRevenueAmount: () => {},
  setRevenueSharedFrequency: () => {},
  setDesiredRepaymentDelay: () => {},
  setTotalRevenueShare: () => {},
  handleRevenueInput: () => {},
  handleFundingAmount: () => {},
});

const FinanceContextProvider = ({ children }) => {
  const [financeData, setFinanceData] = useState({});
  const [revenueAmount, setRevenueAmount] = useState(0);
  const [fundingAmount, setFundingAmount] = useState(0);
  const [fundReasons, setFundReasons] = useState([]);
  const [revenueSharedFrequency, setRevenueSharedFrequency] = useState(
    REVENUE_SHARED_FREQUENCY.MONTHLY
  );
  const [totalRevenueShare, setTotalRevenueShare] = useState(0);

  const [desiredRepaymentDelay, setDesiredRepaymentDelay] = useState(30);

  useEffect(() => {
    axios.get(API_LINK).then(({ data }) => {
      const financeData = {};
      data.forEach(
        ({ name, value, label, placeholder, tooltips }) =>
          (financeData[name] = { value, label, placeholder, tooltips })
      );

      setFinanceData(financeData);
    });
  }, []);

  const handleRevenueInput = (event) => {
    setRevenueAmount(event.target.value);
  };

  const handleFundingAmount = (value) => {
    setFundingAmount(value[1]);
  };

  const saveFundReasons = (fundReason) => {
    setFundReasons([...fundReasons, fundReason]);
  };

  const removeFundReason = (reasonId) => {
    const filteredFundReasons = fundReasons.filter(({ id }) => id !== reasonId);
    setFundReasons(filteredFundReasons);
  };

  return (
    <FinanceContext.Provider
      value={{
        financeData,
        revenueAmount,
        fundingAmount,
        revenueSharedFrequency,
        desiredRepaymentDelay,
        totalRevenueShare,
        fundReasons,
        setFundingAmount,
        setRevenueSharedFrequency,
        setDesiredRepaymentDelay,
        setRevenueAmount,
        setFundReasons,
        setTotalRevenueShare,
        removeFundReason,
        handleRevenueInput,
        handleFundingAmount,
        saveFundReasons,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

const API_LINK =
  "https://raw.githubusercontent.com/Ned-Helps/demo-repository/main/config.json";

export default function Main() {
  return (
    <ChakraProvider>
      <FinanceContextProvider>
        <Header />
        <main
          style={{
            backgroundColor: variables.backgroundColor,
            height: "100vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: "0 auto",
              width: "80%",
              paddingTop: "80px",
            }}
          >
            <Finance />
            <Results />
          </div>
        </main>
      </FinanceContextProvider>
    </ChakraProvider>
  );
}
