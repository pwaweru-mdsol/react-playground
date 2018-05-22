import React from "react";
import { connect } from "react-redux";

export const ExpenseSummary = () => (
  <div>
    <p>Expense Summary</p>
  </div>
);

export default connect()(ExpenseSummary);