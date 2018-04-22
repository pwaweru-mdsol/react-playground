import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses.js';
import uuid from 'uuid/v4';

describe('expense actions', () => {
	it('should call addExpense with "ADD_EXPENSE" and "expense" payload', () => {
		const expense = { uuid: '0f20e74a-3534-44e6-8541-b8aa3945ad1b', description: 'test', note: '', amount: '44', createdAt: '2312213' }
		const action = addExpense(expense);
		expect(action).toEqual({
			type: 'ADD_EXPENSE',
			expense
		});
	});

	it('should call editExpense with "EDIT_EXPENSE", "uuid" and "expense" payload', () => {
		const expenseUuid = uuid();
		const expense = { uuid: expenseUuid, description: 'test', amount: '44', createdAt: '2312213' }
		const action = editExpense(expenseUuid, expense);
		expect(action).toEqual({
			type: 'EDIT_EXPENSE',
			uuid: expenseUuid,
			expense
		});
	});

	it('should call removeExpense with "REMOVE_EXPENSE" and "uuid" payload', () => {
		const expenseUUID = uuid();
		const action = removeExpense(expenseUUID);
		expect(action).toEqual({
			type: 'REMOVE_EXPENSE',
			uuid: expenseUUID
		});
	});
});