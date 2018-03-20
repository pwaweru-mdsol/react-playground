import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const initialStore = {
	expense: [{
		id: '123412423',
		description: 'January Rent',
		note: 'Final payment, moving out!',
		amount: 1400,
		createdAt: '0'
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
};

/*
	Multiple reducers for the following:
	Adding expense
	Removing expense
	Editing expense
	Set text filter
	Sort by date and amount
	Set start and end date
*/

// ADD EXPENSE ACTION
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note, 
		amount, 
		createdAt
	}
});

// REMOVE EXPENSE ACTION
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

const editExpense = (id, expense) => ({
	type: 'EDIT_EXPENSE',
	id, 
	expense
})
/*
	Expenses reducer
*/
const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) => {
	switch(action.type){
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return [...state.filter(({ id }) => { return id !== action.id})]
		case 'EDIT_EXPENSE':
			return state.map(expense => {
				if(expense.id === action.id) {
					return {
						...expense,
						...action.expense
					}
				}
			})
		default: return state;
	}
}

/*
	Filters reducer
*/
const filterDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filterDefaultState, action) => {
	switch(action.type){
		case 'SET_FILTER_TEXT':
			return {
				...state,
				text: action.text
			}
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			}
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			}
		default: return state;
	}
}

const setTextFilter = (text = '') => ({
	type: 'SET_FILTER_TEXT',
	text
});

const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

const setStartDate = (startDate = '') => ({
	type: 'SET_START_DATE', 
	startDate
})

const setEndDate = (endDate = '') => ({
	type: 'SET_END_DATE', 
	endDate
})

/*
	Creating the store
*/
const store = createStore(combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer
}));

store.subscribe(() => {
	console.log(store.getState());
});

// const rentExpense = store.dispatch(addExpense({ description: 'rent', amount: 100}));
// // store.dispatch(removeExpense({id: rentExpense.expense.id}));
// store.dispatch(editExpense(rentExpense.expense.id, { description: 'coffee', amount: 500 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());
store.dispatch(setTextFilter('coffee'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(102));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(97685));
// store.dispatch(setEndDate());





