import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";

export default function Index(props) {
  const { transactions } = props;
  const transactionsList = transactions.map((elem, i) => {
    return (
      <>
        <li className="index-list-item">
          <span>{elem.date}</span>
          <Link id="heading-link" to={`/transactions/${i}`}>
            <span>{elem.name}</span>
          </Link>
          <span id={elem.amount < 0 ? "redText" : ""}>{elem.amount}</span>
        </li>
        <hr />
      </>
    );
  });
  let sum = 0;
  transactions.forEach((elem) => {
    return (sum += elem.amount);
  });
  return (
    <div className="index">
      <h2>Bank Account Total: {sum}</h2>
      <ul className="index-list">{transactionsList}</ul>
    </div>
  );
}
