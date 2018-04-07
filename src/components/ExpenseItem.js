import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const ExpenseItem = ({ dispatch, uuid, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${uuid}`}>
      <h3>{description}</h3>
    </Link>
  
    <p>
      £{amount} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense(uuid));
      }}
    >
      remove
    </button>
  </div>
);

export default connect()(ExpenseItem);
