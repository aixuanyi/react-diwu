import React from 'react'
import "./css/CartHeader.css"
import store from '../redux/store.js'

class CartHeader extends React.Component {
	constructor(props){
	  super(props)
	  this.state={
	  	delate:true
	  }
	}
	delate(){
		this.setState({
			delate:!this.state.delate
		})
//		console.log(this.state.delate)
		store.dispatch({
	      type:"DELATE_ITEM",
	      delate:this.state.delate
	    })
//		console.log(store.getState().delateReducer)
	}
	back(){
  		window.history.back()
	}
//	componentDidMount(){
//		console.log(store.getState().listReducer.length)
////		if(store.getState().listReducer.length == "0"){
////	  		this.refs.delate.style.display = "none"
////	  	}
//	}
	render(){
		return(
			<div className="title">
				<span className="iconfont icon-icon" onClick = {this.back.bind(this)}></span>
				<h1>购物袋</h1>
				<span className="delate" onClick={this.delate.bind(this)} ref="delate" style={{display:"block"}}>编辑</span>
			</div>
		)
	}
}
export default CartHeader;