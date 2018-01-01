import React from 'react'
import "./css/Login.css"
import {NavLink} from "react-router-dom"
import MyAjax from '../md/MyAjax.js'
import LoginHeader from './LoginHeader.jsx'
class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    	onOff:true
    }
  }
  componentDidMount(){
  	document.getElementById("header").style.display = "none"
  }
  test(){
		var url = "http://10.9.160.52:3000/login"
		var username=this.refs.username.value;
		var password=this.refs.password.value;
		if(password.length<6){
			alert("密码长度必需大于6位！")
		}else{
			MyAjax.getData(url,{
			 	params:{
			 		username,
			 		password
			 	}
			 },(data)=>{
			 	if(data=="0"){
			 		alert("用户名或密码错误")
			 	}else{
			 		alert("登陆成功")
			 		//console.log(data)
			 		localStorage.setItem("userID",data[0].username)
			 		this.props.history.push('/user')
//					window.location.href="./User.jsx"
			 	}
		  })
			console.log(this.props.history)
		}
	}
  clear(){
  	this.refs.password.value = ""
  }
	hide(){
		this.setState({
			onOff:!this.state.onOff
		})
		//console.log(this.state.onOff)
		var show=this.state.onOff?"text":"password"
		//console.log(show)
		this.refs.password.setAttribute("type",show)
	}
  render(){
    return (
      <div>
      
      	
      	<LoginHeader />
      
      	<div id="contentor">
      
      	<div>
      	<input type="text" id="username" ref="username" placeholder="请输入邮箱/手机号"/>
      	</div>
      	<div>
      	<input type="password" id="password" ref="password" placeholder="请输入密码"/>
      	</div>
      	<div>
      	<span className="iconfont icon-qingkong" onClick={this.clear.bind(this)}></span>
      	<span className="iconfont icon-yincangmima" onClick={this.hide.bind(this)}></span>
      	</div>
      	<div>
      	<button id="btn" onClick={this.test.bind(this)}>登录</button>
      	</div>
      	<div id="goto">
      		<span>忘记密码?</span>
      		<span><NavLink to="/register">用户注册</NavLink></span>
      	</div>
      </div>
      </div>
    )
  }
}

export default Login;