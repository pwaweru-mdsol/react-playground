import React from 'react';

const EditExpense = (props) => {
	return (
		<div>
			Edit Expense! {props.match.params.expenseId}
		</div>
	)
}

export default EditExpense;