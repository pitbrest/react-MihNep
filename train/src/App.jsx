import React, { Component } from 'react';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';


class App extends Component {

	render() {
		return (
			<>
				<Header />
				<Main />
				<Footer />
			</>
		);
	}
}

export { App };
