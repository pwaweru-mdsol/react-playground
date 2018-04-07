import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from "../actions/expenses";

const EditExpense = props => {
  return (
  	<div>
  		<ExpenseForm 
	  		expense={props.expense}
	  		onSubmit={(expense) => {
	  			props.dispatch(editExpense(props.expense.uuid, expense));
	  			props.history.push('/');
  			}}
  		/>
  	</div>);
};

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find(expense => expense.uuid === props.match.params.uuid)
	}
}

export default connect(mapStateToProps)(EditExpense);
