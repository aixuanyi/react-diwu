import React from 'react';

class Nav extends React.Component{
  constructor(props){
    super(props);
		this.state={
			list:[
							{
								incon:"iconfont icon-shandian",
								name:"上新"
							},
							{
								incon:"iconfont icon-feiji",
								name:"海外馆"
							},
							{
								incon:"iconfont icon-shandian",
								name:"闪购"
							},
							{
								incon:"iconfont icon-pinpai",
								name:"品牌"
							}
			]

		}
  }

	render(){
		return(
	 		<div className ="fun_nav">
				<ul className="fun_nan">
						{
							this.state.list.map((item,index)=>{
								return <li key={"list"+index} className="fun_list">
													<i className={item.incon}></i>
													{item.name}
											</li>
							})
						}
				</ul>
	 		</div>
			
		)
	}
}


export default Nav;