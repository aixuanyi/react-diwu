import React from 'react'
import ReactDOM from 'react-dom'
import Banner from './Home/Banner.jsx'
import Nav from './Home/Nav.jsx'
import Head from './Home/Head.jsx'
import Cont from './Home/Cont.jsx'
import ContentHome from './Home/ContentHome.jsx'

class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}

   componentDidMount(){
    document.getElementById("header").style.display = "none"
  }
	render(){
		return(
      	<div className="bigbox">
      		<Head />
      		<Banner />
      		<Nav />
      		<Cont />
			<ContentHome /> 
		</div>
		)
	}
}
export default Home;