// Dependencies
import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "./util/apiUrl";

// Components
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

// Pages
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

// Configuration
const API_BASE = apiUrl();

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API_BASE}/transactions/create`, newTransaction)
      .then((response) => {
        return axios
          .get(`${API_BASE}/transactions`)
          .then((response) => {
            setTransactions(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  const updateTransaction = (updatedTransaction, index) => {
    axios
      .put(`${API_BASE}/transactions/${index}`, updatedTransaction)
      .then((response) => {
        return axios
          .get(`${API_BASE}/transactions`)
          .then((response) => {
            setTransactions(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  const deleteTransaction = (index) => {
    axios.delete(`${API_BASE}/transactions/${index}`).then((response) => {
      return axios.get(`${API_BASE}/transactions`).then((response) => {
        setTransactions(response.data).catch((error) => {
          console.log(error);
        });
      });
    });
  };

  useEffect(() => {
    axios.get(`${API_BASE}/transactions`).then((response) => {
      setTransactions(response.data);
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/transactions">
            <Index transactions={transactions} />
          </Route>
          <Route path="/transactions/new">
            <New addTransaction={addTransaction} />
          </Route>
          <Route exact path="/transactions/:index">
            <Show
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />
          </Route>
          <Route path="/transactions/:index/edit">
            <Edit
              transactions={transactions}
              updateTransaction={updateTransaction}
            />
          </Route>
          <Route path="*">
            <FourOFour />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
