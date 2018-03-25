import React from "react";

import ExpenseForm from "./ExpenseForm";

const CreateExpense = () => (
  <div>
    Create Expense!
    <ExpenseForm
      onSubmit={expense => {
        console.log(expense);
      }}
    />
  </div>
);

export default CreateExpense;
