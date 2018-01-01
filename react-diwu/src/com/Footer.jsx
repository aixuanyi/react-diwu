import React from 'react'

import {NavLink} from 'react-router-dom'

const Footer = () => (
	<ul>
		<li> <NavLink activeClassName="active" to="/home"><i className="iconfont icon-shouye"></i>首页</NavLink></li>
		<li> <NavLink activeClassName="active" to="/kind"><i className="iconfont icon-store"></i>分类</NavLink></li>
		<li> <NavLink activeClassName="active" to="/cart"><i className="iconfont icon-gouwuche"></i>购物车</NavLink></li>
		<li> <NavLink activeClassName="active" to="/user"><i className="iconfont icon-yonghu2"></i>我的</NavLink></li>
		
	</ul>
)

export default Footer;