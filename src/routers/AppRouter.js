import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExpenseDashboard from '../components/ExpenseDashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import Help from '../components/Help.js';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboard} exact={true}/>
				<Route path="/create" component={CreateExpense}/>
				<Route path="/edit/:uuid" component={EditExpense}/>
				<Route path="/help" component={Help}/>
				<Route component={NotFound}/>
			</Switch>
		</div>
	</BrowserRouter>	
);

export default AppRouter;