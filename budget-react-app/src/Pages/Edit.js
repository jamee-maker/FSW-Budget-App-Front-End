import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../util/apiUrl";
import "./Edit.css";

const API = apiUrl();

export default function Edit(props) {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const { updateTransaction } = props;

  let { index } = useParams();
  let history = useHistory();

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
    updateTransaction(transaction, index);
    history.push("/transactions");
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => {
        history.push("/not-found");
      });
  }, [index, history]);

  return (
    <div className="edit-page">
      <h2>Add a new item</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
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
        <button type="submit">EDIT ITEM</button>
      </form>
    </div>
  );
}
