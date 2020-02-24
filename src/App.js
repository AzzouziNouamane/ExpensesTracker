import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Balance } from './Components/Balance';
import { BalanceTab } from './Components/BalanceTab';
import { History } from './Components/History';
import { AddTransaction } from './Components/AddTransaction';

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <BalanceTab />
      <History />
      <AddTransaction />
    </div>
  );
}

export default App;
