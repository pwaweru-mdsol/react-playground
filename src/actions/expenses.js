import uuid from 'uuid';

import database from '../../firebase/firebase';

export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
});

export const startCreateExpense = (expenseData = {}) => {
	return dispatch => {
		const {
			description = '', note = '', amount = 0, createdAt = 0
		} = expenseData;

		const expense = { description, note, amount, createdAt }
		
		return database.ref('expenses').push(expense).then(ref => {
			dispatch(addExpense({
				id: ref.key,
				...expense
			}));
		});
	}
}

export const removeExpense = (uuid = '') => ({
	type: 'REMOVE_EXPENSE',
	uuid
});

export const editExpense = (uuid = '', expense = '') => ({
	type: 'EDIT_EXPENSE',
	uuid, 
	expense
});
