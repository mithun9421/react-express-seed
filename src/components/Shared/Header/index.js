import React, { useEffect, useState } from 'react';
import { auth } from '../../../firebase/utils';
import { useHistory } from 'react-router';
import Logo from './Logo';
import './styles.scss';

const Header = () => {
	const [ user, setUser ] = useState(null);
	const history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged((currentUser) => setUser(currentUser?.email));
	}, [])

	const handleLoginClick = () => {
		history.push('/login');
	};

	const handleLogoutClick = () => {
		auth.signOut().then((response) => console.log(response))
	};
	return (
		<div className="header">
			<div className="wrapper">
				<Logo />
				{
					!user &&
					<button type="button" className="mybutton" onClick={handleLoginClick}>
					Login
				</button>
				}
				{
					user &&
					<button type="button" className="mybutton" onClick={handleLogoutClick}>
					Logout
				</button>
				}
			</div>
		</div>
	);
};

export default Header;
