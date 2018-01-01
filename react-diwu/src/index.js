import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,Switch} from 'react-router-dom';
import App from './App.js';
import Shouye from './shouye.scss';
import fenlei from './kind.scss';
import yonghu from './user.scss';
import store from './redux/store.js'
import Detail from './Detail.jsx'
import Search from './Search.jsx'

import './main.scss';
import registerServiceWorker from './registerServiceWorker';
test()
function test(){
	ReactDOM.render(
  <Router>
    <Switch>
    	<Route path="/search" component = {Search}  />
    	<Route component = {Detail} path="/detail/:goodsID"/>
      <Route component = {App} path = "/"/>
    </Switch>
  </Router>,
	document.getElementById('root'));
	registerServiceWorker();
}

store.subscribe(test)
