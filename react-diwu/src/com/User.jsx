import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login.jsx'
import LoginHeader from './LoginHeader.jsx'
class User extends React.Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	logout(){
		localStorage.removeItem("userID");
		this.props.history.push('/login')
	}
	componentDidMount(){
    document.getElementById("header").style.display = "none"
  }
	render(){
		
		if(localStorage.getItem("userID")){
			var username = localStorage.getItem("userID");
			return(
      	<div className="info">
      		<div className="infotitle">
      			<div className="info_top">
      				
      				<a href="javascript:;" onClick={this.logout.bind(this)}>退出</a>
      				<i className="iconfont icon-xiaoxi"></i>
      			</div>
      			<div className="user_info">
      				<i className="iconfont icon-yonghu"></i>
      				<div className="user_info_p">
      					<p className="user_desc">用户名：{username}</p>
      					<p className="member"> V1会员 &gt;</p>
      				</div>
      			</div>
      		</div>
      		<div className="infocon">
      			<div className="dingdan">
      				<a className="dingdan_title">
      					<span className="d_tt_l">我的订单</span>
      					<span className="d_tt_r">查看全部</span>
      				</a>
      				<ul className="info_paylist_warp">
      					<li className="info_paylist">
      						<a> 
      						<div className="info_logo dfk">
      							<i className="iconfont icon-weibiaoti2fuzhi04"></i>
      						</div>
      						<p className="info_paylist_name">待付款 </p> 
      						</a> 
      					</li>
      					<li className="info_paylist"> 
	      					<a> 
	      					<div className="info_logo dsh"> 
      							<i className="iconfont icon-daishouhuo"></i>
	      					</div>
	      					<p className="info_paylist_name"> 待收货 
	      					</p>
	      					</a>
      					</li>
      				</ul>
      			</div>
      			<div className="dingdan">
					<a className="dingdan_title">
      					<span className="d_tt_l">我的资产</span>
      				</a>
      				<ul className="info_paylist_warp">
      					<li className="info_paylist">
      						<a> 
      						<div className="info_logo dfk">
      							<i className="iconfont icon-jifen3"></i>
      						</div>
      						<p className="info_paylist_name">积分</p> 
      						</a> 
      					</li>
      					<li className="info_paylist"> 
	      					<a> 
	      					<div className="info_logo dsh"> 
      							<i className="iconfont icon-lingquanzhongxin"></i>
	      					</div>
	      					<p className="info_paylist_name"> 优惠券
	      					</p>
	      					</a>
      					</li>
      					<li className="info_paylist"> 
	      					<a> 
	      					<div className="info_logo dsh"> 
      							<i className="iconfont icon-yue"></i>
	      					</div> 
	      					<p className="info_paylist_name">余额</p>
	      					
	      					</a>
      					</li>      					
      				</ul>      			
      			</div>
      			<div className="info_phone">
      				 客服电话：<a className="phone_num">400-867-6738</a>
      			</div>
      			
      		</div>
      	</div>
					
		)
		}else{
			return(<div>
				
				<Login />
			</div>)
		}
	}
}
export default User;