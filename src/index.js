import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation';

ReactDOM.render(
	<BrowserRouter>
		<Navigation />
		<App />
	</BrowserRouter>, 
	document.getElementById('root')
);
