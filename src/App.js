import React from "react";

import Balance from "./components/body/Balance";
import IncomeEpenses from "./components/body/IncomeEpenses";
import TransactionList from "./components/body/TransactionList";
import { Header } from "./components/header/Header";
import "./App.css";
import AddTransaction from "./components/body/AddTransaction";
import { GlobalProvider } from "./components/context/GlobalState";
const App = () => {
  return (
    <div className="container">
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeEpenses />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
};

export default App;
