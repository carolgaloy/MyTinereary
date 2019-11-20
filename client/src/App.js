import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Cities from './components/Cities.js';
import Itineraries from './components/Itineraries.js';

function App() {
	return (
		<BrowserRouter>
		<div>
			<Header/>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/cities' component={Cities} />
				<Route path='/itineraries/:id' component={Itineraries} />
			</Switch>
			<Footer />
		</div>
		</BrowserRouter>
	);
}

export default App;
