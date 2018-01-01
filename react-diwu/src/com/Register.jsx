import React from 'react'
import "./css/Register.css"
import MyAjax from '../md/MyAjax.js'
import {Route} from 'react-router-dom';
import RegisterHeader from './RegisterHeader.jsx'
class Register extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    	onOff:true
    }
  }
	test(){
		var url = "http://10.9.160.52:3000/register"
		var username=this.refs.username.value;
		var password=this.refs.password.value;
		var tel=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
		var email=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
		if(!tel.test(username)&&!email.test(username)||password.length<6){
			if(username==""){
				alert("用户名不能为空！")
			}
			if(password.length<6){
				alert("密码长度必需大于6位！")
			}
			if(!tel.test(username)&&!email.test(username)){
				alert("请输入正确手机号或邮箱")
			}
		}
		else{
			MyAjax.getData(url,{
			 	params:{
			 		username,
			 		password
			 	}
			},(data)=>{
			 	if(data=="0"){
			 		alert("用户名已被注册")
			 	}else{
			 		alert("注册成功")
			 	}
			})
			console.log(this.props)
			window.location.replace("#/login")
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
	 componentDidMount(){
  	document.getElementById("header").style.display = "none"
  }
  render(){
    return (
     <div>
        <RegisterHeader />
     		 <div id="contentor">
      	<input type="text" id="username" ref="username" placeholder="请输入邮箱/手机号"/>
      	<input type="password" id="password" ref="password" placeholder="请输入密码"/>
      	<span className="iconfont icon-qingkong" onClick={this.clear.bind(this)}></span>
      	<span className="iconfont icon-yincangmima" onClick={this.hide.bind(this)}></span>
      	<button id="btn" onClick={this.test.bind(this)}>下一步</button>
      	<p>点击注册,表示同意《第五大道用户服务协议》</p>
      </div>
     </div>
    )
  }
}

export default Register;