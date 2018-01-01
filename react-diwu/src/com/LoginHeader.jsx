import React from 'react'
import "./css/LoginHeader.css"
class LoginHeader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  back(){
  	window.history.back()
  }
  render(){
    return (
      <div id="title">
      	<h3>登录第五大道</h3>
      	<span className="iconfont icon-icon" onClick = {this.back.bind(this)}></span>
      </div>
    )
  }
}

export default LoginHeader;