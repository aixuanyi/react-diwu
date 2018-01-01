import React from 'react'
import ReactDOM from 'react-dom'
import MyAjax from './../md/MyAjax.js'
import {Switch,Route,NavLink,Redirect} from 'react-router-dom'
import List from './Kind/List.jsx'


class Kind extends React.Component{
	constructor(props){
		super(props)
		this.state={
			classList:[]
		}
	}
	 componentDidMount(){
    document.getElementById("header").style.display = "block"
  }
	componentWillMount(){
		var that=this;
		var url = 'http://10.9.160.52:3000/kind'
   		 MyAjax.getData(url,{},(data) =>{
//  	console.log(data)
    		that.setState({
    			classList:data
    		})
   		 })
	}

	render(){
		var arr=[]
		this.state.classList.map((item,index)=>{
			arr.push(<NavLink to={"/kind/" + item.catid} key={item.catid}>
				<li className="tab_list">{item.cata_name}</li></NavLink>)
		})
		return(
      	<div className="bigbox">
			<div className="border-1px">
				<div className="border-1px-small">
					<ul className="tab_warp">
					{arr}
      				</ul>
				</div>


			
				
			</div>
      		
      		<Switch>

				<Route path="/kind/:catid" component = {List} />
              	<Redirect  from ="/" to="/kind/4" />
      		</Switch>

      	</div>
					
		)
	}
}

export default Kind;