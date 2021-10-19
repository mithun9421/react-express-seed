import React from 'react';
import './styles.scss';

export default function MainLayout({ children }) {
	return (
		<div className="main-layout">
			<div className="wrapper">{children && children}</div>
		</div>
	);
}
