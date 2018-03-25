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

store.dispatch(addExpense({ description: 'Water Bill', amount: 4500, createdAt: 1}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1000, createdAt: 2}));
store.dispatch(addExpense({ description: 'Coffee', amount: 3243432, createdAt: 3}));

const App = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(App, document.getElementById('app'));