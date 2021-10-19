import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Logo() {
	return (
		<div className="logo">
			<Link to="/">{'Goodlife Center'}</Link>
		</div>
	);
}
