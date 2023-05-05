"use client";
import axios from "axios";
import Image from "next/image";
import Finance from "@/components/finance";
import Results from "@/components/results";
import Header from "@/components/header";
import "@/app/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import variables from "../styles/variables.module.scss";
import { createContext, useContext, useEffect, useState } from "react";
import { CARDTYPES, REVENUE_SHARED_FREQUENCY } from "@/constants/enums";

export const FinanceContext = createContext({
  financeData: {},
  revenueAmount: 0,
  fundingAmount: 0,
  fundReasons: [],
  revenueSharedFrequency: REVENUE_SHARED_FREQUENCY.MONTHLY,
  desiredRepaymentDelay: 30,
  setFundingAmount: () => null,
  setRevenueAmount: () => null,
  setRevenueSharedFrequency: () => null,
  setDesiredRepaymentDelay: () => null,
  handleRevenueInput: () => null,
  handleFundingAmount: () => null,
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

  return (
    <FinanceContext.Provider
      value={{
        financeData,
        revenueAmount,
        fundingAmount,
        revenueSharedFrequency,
        desiredRepaymentDelay,
        totalRevenueShare,
        setFundingAmount,
        setRevenueSharedFrequency,
        setDesiredRepaymentDelay,
        setRevenueAmount,
        setTotalRevenueShare,
        handleRevenueInput,
        handleFundingAmount,
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
            <Results cardType={CARDTYPES.RESULTS} />
          </div>
        </main>
      </FinanceContextProvider>
    </ChakraProvider>
  );
}
