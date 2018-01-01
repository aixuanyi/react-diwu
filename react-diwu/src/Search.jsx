import React from 'react'
//import ReactDOM from 'react-dom'
import searc from './search.scss';
class UserHeader extends React.Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	quxiao(){
		this.refs.list.value=""
	}
	render(){
		return(
      	<div className="door">
			<div className="door_tab border-1px" id="nav">
				<div className="search_bd">
					<i className="iconfont icon-sousuo"></i>
					<input  type="search" className="search_text" ref="list" placeholder="Gucci 包"/>
				</div>
				<div className="qux" onClick={this.quxiao.bind(this)}>取消</div>
			</div>
			
			<div className="hotsearch">
				<div className="hot_title">热门搜索</div>
				<ul className="hot_con">
					<li className="hotlist">Rolex劳力士</li>
					<li className="hotlist">Chanel</li>
					<li className="hotlist">斩男口红</li>
					<li className="hotlist">Swarovski施华洛世奇</li>
					<li className="hotlist">Hermes爱马仕</li>
					<li className="hotlist">Pinko少女包</li>
					<li className="hotlist">Burberry围巾</li>
					<li className="hotlist">Michael Kors</li>
					<li className="hotlist">UGG羊皮靴</li>
				</ul>
			</div>
      	</div>
					
		)
	}
}
export default UserHeader;