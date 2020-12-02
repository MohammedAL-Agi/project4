// import './App.css';
import React from 'react';
import './style.css';
import Mynav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import Register from './components/Regitster';
import Footer from './components/Footer';
import Profilee from './components/Profile';
import {
	HashRouter,
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Profile from './components/Profile';

function App() {
	return (
		<HashRouter basename="/">
			<div className="big__container">
				<Mynav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Services" component={Services} />
					<Route path="/Register" component={Register} />
					<Route path="/Profile" component={Profile} />
				</Switch>
				<Footer />
			</div>
		</HashRouter>
	);
}

export default App;
