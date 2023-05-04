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

export const FinanceContext = createContext({
  financeData: {},
  revenueAmount: 0,
  fundingAmount: 0,
  handleRevenueInput: () => {},
  handleFundingAmount: () => {},
});

const FinanceContextProvider = ({ children }) => {
  const [financeData, setFinanceData] = useState({});
  const [revenueAmount, setRevenueAmount] = useState(0);
  const [fundingAmount, setFundingAmount] = useState(0);

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
    console.log(value[1]);
    setFundingAmount(value[1]);
  };

  return (
    <FinanceContext.Provider
      value={{
        financeData,
        revenueAmount,
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
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   axios.get(API_LINK).then(({ data }) => {
  //     const financeData = {};
  //     data.forEach(
  //       ({ name, value, label, placeholder, tooltips }) =>
  //         (financeData[name] = { value, label, placeholder, tooltips })
  //     );

  //     setData(financeData);
  //   });

  //   // console.log(data, "here");
  // }, []);

  // console.log(data, "yoo");

  return (
    <ChakraProvider>
      <FinanceContextProvider>
        <Header />
        <main
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: variables.backgroundColor,
            height: "80vh",
            paddingLeft: "180px",
            paddingRight: "180px",
            paddingTop: "146px",
          }}
        >
          {/* <main className="flex min-h-screen flex-row items-center justify-between p-24  "> */}
          <Finance />
          <Results />
          {/* </main> */}
        </main>
      </FinanceContextProvider>
    </ChakraProvider>
  );
}
