import React from "react";

export default function Index(props) {
  const { transactions } = props;
  const transactionsList = transactions.map((elem) => {
    return (
      <>
        <li>
          <span>{elem.date}</span>
          <span>{elem.name}</span>
          <span>{elem.amount}</span>
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
    <div>
      <h2>Bank Account Total: {sum}</h2>
      <ul>{transactionsList}</ul>
    </div>
  );
}
