import React from 'react';
import './App.css';
import TransactionList from './components/TransactionList';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './contexts/GlobalState';


function App() {
  return (
    <div>

      <GlobalProvider>

        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>

      </GlobalProvider>
      
    </div>
  );
}

export default App;
