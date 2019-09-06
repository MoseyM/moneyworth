import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import './App.css';
import Navigation from './components/navigation';
import App from './components/app';


ReactDOM.render(
	<BrowserRouter basename="/moneyworth">
		<Navigation/>
		<App/>
	</BrowserRouter>, 
	document.getElementById('root')
);
