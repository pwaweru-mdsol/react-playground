import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import './src/styles/style.scss';
import 'normalize.css/normalize.css';

import AppRouter from './src/routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('app'));