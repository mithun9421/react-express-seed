import React, { useState } from 'react';
import { auth } from '../../firebase/utils';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

export default function LoginPage() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const history = useHistory();
	return (
		<div>
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
						history.push('/');
					});
				}}
			>
				Sign In
			</button>
		</div>
	);
}
