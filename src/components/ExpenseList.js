import React from 'react';
import { connect } from 'react-redux';

import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => (
	<div>
		<h1>Expense List</h1>
		{
			props.expenses.map(expense => (
				<ExpenseItem description={expense.description} amount={expense.amount} createdAt={expense.createdAt}/>
			))
		}
	</div>
);

const mapStateToProps = (state => {
	return { expenses: state.expenses, filters: state.filters }
});

export default connect(mapStateToProps)(ExpenseList);		