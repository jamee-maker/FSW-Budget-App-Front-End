import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function New(props) {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const { addTransaction } = props;

  const history = useHistory();

  const handleTextChange = (e) => {
    setTransaction((state) => ({
      ...state,
      [e.target.id]: e.target.value,
    }));
  };

  const handleNumberChange = (e) => {
    setTransaction((state) => ({
      ...state,
      amount: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(transaction);
    history.push("/transactions");
  };

  return (
    <div>
      <h2>Add a new item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Date">Date</label>
        <input
          type="text"
          placeholder="date"
          id="date"
          value={transaction.date}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          placeholder="name"
          id="name"
          value={transaction.name}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="Amount">Amount</label>
        <input
          type="number"
          placeholder="amount"
          id="amount"
          value={transaction.amount}
          onChange={handleNumberChange}
          required
        />
        <label htmlFor="From">From</label>
        <input
          type="text"
          placeholder="from"
          id="from"
          value={transaction.from}
          onChange={handleTextChange}
          required
        />
        <br />
        <button type="submit">CREATE NEW ITEM</button>
      </form>
    </div>
  );
}
