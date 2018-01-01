import React from 'react'
import "./css/RegisterHeader.css"
class RegisterHeader extends React.Component {
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
      	<h3>用户注册</h3>
      	<span className="iconfont icon-icon" onClick = {this.back.bind(this)}></span>
      </div>
    )
  }
}

export default RegisterHeader;