import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import './styles/app.scss';

const App = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ user, loading, error ] = useAuthState(auth);
	const history = useHistory();

	useEffect(
		() => {
			if (loading) {
				// Showwing a loading screen
				return;
			}
			if (user) {
				console.log('User signed in already', user);
			}
		},
		[ user, loading ]
	);

	// const getSampleDataFromExpress = () => {
	// 	fetch('http://localhost:4000/api/hello-world', {
	// 		crossDomain: true,
	// 		method: 'GET',
	// 		headers: { 'Content-Type': 'application/json' }
	// 	})
	// 		.then((response) => response.json())
	// 		.then((jsondata) => console.log(jsondata));
	// };

	return (
		<div className="app">
			Hello {email}
			<input
				type="text"
				className="login__textBox"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="E-mail Address"
			/>
			<input
				type="password"
				className="login__textBox"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
			/>
			<button
				type="button"
				className="button"
				onClick={() => {
					auth.signInWithEmailAndPassword(email, password).then((response) => {
						console.log('User signed in ', response);
					});
				}}
			>
				Sign In
			</button>
			{/* <img src={Image} /> */}
		</div>
	);
};

export default App;
