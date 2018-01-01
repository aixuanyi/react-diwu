import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'

test()
function test(){
	ReactDOM.render(
		<Router>
				<Route component = {App} path="/"/>
		</Router>, 
		document.getElementById('root'));
	registerServiceWorker();
}
store.subscribe(test);