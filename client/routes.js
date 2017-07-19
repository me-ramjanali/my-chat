import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Login from './components/Login';

export default (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Login} />
		</Route>
	</Router>
)
