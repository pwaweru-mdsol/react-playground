import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import './src/styles/style.scss';
import 'normalize.css/normalize.css';

import AppRouter from './src/routers/AppRouter';
import configureStore from './src/store/configureStore';
import { setTextFilter } from './src/actions/filters';
import "react-dates/lib/css/_datepicker.css";

import './firebase/firebase';
import './playground/promises';

import { Provider } from 'react-redux';

const store = configureStore();

const App = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(App, document.getElementById('app'));