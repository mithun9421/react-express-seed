import React from 'react';
import styles from './styles/app.css';

class App extends React.Component {
	componentDidMount() {
		console.log("Component Did moun t")
		fetch("http://localhost:4000/api/hello-world", {
			crossDomain: true,
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		})
		.then(response => response.json())
		.then(jsondata => console.log(jsondata))
	}
	render() {
		return <div className="app">Hello world froms React.</div>; 
	   } 
}

export default App;