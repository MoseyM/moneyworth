import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import './App.css';
import Navigation from './components/navigation';
import {Routes} from './components/routes';


ReactDOM.render(
	<BrowserRouter>
		<Navigation/>
		{Routes}
	</BrowserRouter>, 
	document.getElementById('root')
);
