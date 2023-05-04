"use client";
import axios from "axios";
import Image from "next/image";
import Finance from "@/components/finance";
import Results from "@/components/results";
import { createContext, useContext, useEffect, useState } from "react";

export const FinanceContext = createContext({
  financeData: {},
});

const FinanceContextProvider = ({ children }) => {
  const [financeData, setFinanceData] = useState({});

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

  return (
    <FinanceContext.Provider value={{ financeData }}>
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
    <FinanceContextProvider>
      <main className="flex min-h-screen flex-row items-center justify-between p-24">
        <Finance />
        <Results />
      </main>
    </FinanceContextProvider>
  );
}
