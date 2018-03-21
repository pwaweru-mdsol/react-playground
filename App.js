import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import './src/styles/style.scss';
import 'normalize.css/normalize.css';

import AppRouter from './src/routers/AppRouter';
import configureStore from './src/store/configureStore';
import { addExpense } from './src/actions/expenses';
import { setTextFilter } from './src/actions/filters';
import getVisibleExpenses from './src/selectors/expenses';

import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 800000, createdAt: -221000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 5674567, createdAt: 675465 }));
store.dispatch(setTextFilter('a'));

const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));