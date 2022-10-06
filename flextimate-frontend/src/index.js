import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/reset.css';
import './assets/css/style.css';

import App from './App';

ReactDOM.render(
	<div className="App">
		<App />
	</div>,
	// eslint-disable-next-line no-undef
	document.querySelector('.root')
);