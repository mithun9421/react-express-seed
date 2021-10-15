import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	componentDidMount() {
		fetch("http://localhost:4000/api", {
			crossDomain: true,
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		})
		.then(response => response.json())
		.then(jsondata => console.log(jsondata))
	}
	render() {
		return <div>Hello world f rom React.</div>; 
	   } 
}

ReactDOM.render(<App />, document.getElementById('root'));
