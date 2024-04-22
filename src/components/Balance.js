import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';



function Balance() {
  const { transactions } = useContext(GlobalContext);

  // Ensure that transaction.amount is defined before using it
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>₹{total}</h1>
    </div>
  );
}

export default Balance;
