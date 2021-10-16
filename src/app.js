import React from 'react';
import Image from './images/github-cover.jpg'
import './styles/app.scss';

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
		return <div className="app">Hello world froms React.
			<img src={Image}></img></div>;
	   } 
}

export default App;