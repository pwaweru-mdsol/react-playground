import uuid from 'uuid';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		uuid: uuid(),
		description,
		note, 
		amount, 
		createdAt
	}
});

export const removeExpense = (uuid = '') => ({
	type: 'REMOVE_EXPENSE',
	uuid
});

export const editExpense = (uuid = '', expense = '') => ({
	type: 'EDIT_EXPENSE',
	uuid, 
	expense
});
