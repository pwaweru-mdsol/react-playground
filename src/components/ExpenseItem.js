import React from "react";
import { Link } from "react-router-dom";

const ExpenseItem = ({ uuid, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${uuid}`}>
      <h3>{description}</h3>
    </Link>

    <p>
      £{amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseItem;
