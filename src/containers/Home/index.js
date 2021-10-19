import React, {useState,useEffect} from 'react';
import { auth } from '../../firebase/utils';
import './styles.scss';

export default function Home() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged((currentUser) => setUser(currentUser?.email));
	}, []);
	return <div className="home">{ <span>{user ? `Hi ${user}` : 'Please login with mithun@gmail.com/mithun'}</span>}</div>;
}