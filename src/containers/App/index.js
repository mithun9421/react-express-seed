import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { auth } from '../../firebase/utils';
import Header from '../../components/Shared/Header';
import Home from '../Home';
import LoginPage from '../LoginPage';
import MainLayout from '../../layouts/Main';
import { EXPRESS_API_SUBPATH, EXPRESS_API_URL, EXPRESS_API_HELLOWORLD } from '../../configs/configs';

import './styles.scss';

const App = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		auth.onAuthStateChanged((currentUser) => setUser(currentUser?.email));
	}, []);

	return (
		<div className="app">
			<Router>
				<Header />
				<Switch>
					<Route
						onEnter
						exact
						path="/"
						render={() => (
							<MainLayout>
								<Home />
							</MainLayout>
						)}
					/>
					<Route exact path="/login" component={LoginPage} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;

// sample api req
// fetch(`${EXPRESS_API_URL}/${EXPRESS_API_HELLOWORLD}`, {
// 	method: 'GET',
// 	headers: { 'Content-Type': 'application/json' }
// })
// 	.then((response) => response.json())
// 	.then((jsondata) => console.log(jsondata));
