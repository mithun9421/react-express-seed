import React from 'react';
import './styles.scss';

export default function FullPageLayout({ children }) {
	return <div className="fullpage-layout">{children && children}</div>;
}
