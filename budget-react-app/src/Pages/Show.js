import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../util/apiUrl";

const API = apiUrl();

export default function Show(props) {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let history = useHistory();
  let { deleteTransaction } = props;

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

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };

  const previousPage = () => {
    history.push("/transactions");
  };

  const editPage = () => {
    history.push(`/transactions/${index}/edit`);
  };

  return (
    <div>
      <h2>Transaction</h2>
      <ul>
        <li>
          <span>{transaction.date}</span>
          <span>{transaction.name}</span>
          <span>{transaction.amount}</span>
        </li>
      </ul>
      <button onClick={handleDelete}>DELETE TRANSACTION</button>
      <button onClick={previousPage}>Back</button>
      <button onClick={editPage}>Edit</button>
    </div>
  );
}
