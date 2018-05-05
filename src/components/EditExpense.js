import React, { Component } from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpense extends Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.uuid, expense);
    this.props.history.push('/');
  }
   onRemove = expense => {
    this.props.removeExpense(this.props.expense.uuid);
    this.props.history.push('/');
   }

   render() {
     return (
        <div>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
        >
           remove
        </button>
      </div>
     )
   }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.uuid === props.match.params.uuid)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (uuid, expense) => dispatch(editExpense(uuid, expense)),
  removeExpense: uuid => dispatch(removeExpense(uuid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
