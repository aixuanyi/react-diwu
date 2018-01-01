import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'

import Footer from "./com/Footer.jsx"
import Home from './com/Home.js';
import HomeHeader from './com/HomeHeader.jsx';
import Kind from './com/Kind.jsx';
import KindHeader from './com/KindHeader.jsx';
import User from './com/User.jsx';
import UserHeader from './com/UserHeader.jsx';

import Cart from './com/Cart.jsx';
import CartHeader from './com/CartHeader.jsx';
import CartFooter from './com/CartFooter.jsx';
import Register from './com/Register.jsx';
import RegisterHeader from './com/RegisterHeader.jsx';
import Login from './com/Login.jsx';
import LoginHeader from './com/LoginHeader.jsx';



class App extends Component {
  render() {
    return (
      <div className="container">
					<header id="header">
          <Switch>
                      
            <Route path='/home' component={HomeHeader} />
            <Route path='/kind' component = {KindHeader} />
            <Route path='/cart' component={CartHeader} />
            <Route path='/user' component={UserHeader} />
          </Switch>

					</header>
					<div id="content">
					 <Switch>
              <Route path='/home' component = {Home} />
              <Route path='/kind' component = {Kind} />
              <Route path='/cart' component = {Cart} />
              <Route path='/user' component = {User} />
              <Route path='/login' component = {Login} />
              <Route path='/register' component = {Register} />
              <Route path='/cart' component = {Cart} />
              <Redirect  from ="/" to="/home" />
            </Switch>
					</div>
					<footer id="footer">
							<Route path='/cart' component = {CartFooter} />
              <Footer />
					</footer>
      </div>
    );
  }
}

export default App;
