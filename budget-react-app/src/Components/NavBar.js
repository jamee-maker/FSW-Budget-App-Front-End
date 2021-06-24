import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/transactions">
        <h1>Budget App</h1>
      </Link>
      <nav>
        <Link to="/transactions/new">NEW TRANSACTION</Link>
      </nav>
    </div>
  );
}
