import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link id="heading-link" to="/transactions">
          <h1>Budget App</h1>
        </Link>
        <Link to="/transactions/new">
          <button>NEW TRANSACTION</button>
        </Link>
      </nav>
    </div>
  );
}
