import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

const ExpenseItem = ({ dispatch, uuid, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
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
