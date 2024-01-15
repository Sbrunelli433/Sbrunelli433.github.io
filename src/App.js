import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.component.jsx';
import LandingPage from './pages/LandingPage/LandingPage';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer.component';

function App() {
	return (
	<div>
		<Header />
		<Switch>
			<Route exact path='/' component={LandingPage} />
			<Route exact path='/about' component={AboutPage} />
			<Route exact path='/projects' component={ProjectsPage} />
			<Route exact path='/contact' component={ContactPage} />
		</Switch>

	</div>
	);
}

export default App;
