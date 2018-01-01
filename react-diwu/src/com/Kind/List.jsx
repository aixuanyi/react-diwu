import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import MyAjax from './../../md/MyAjax.js'
class List extends React.Component{
	constructor(props){
		super(props)
		this.getData=this.getData.bind(this)
		this.state={
			list:[],
			taptop:[
				{
					name:"综合",
					icon:"iconfont"
				},
				{
					name:"品牌",
					icon:""
				},
				{
					name:"分类",
					icon:""
				},
				{
					name:"筛选",
					icon:"iconfont icon-shaixuan"
				}
			]
		}
	}
	getData(catid){
		console.log("请求的catid是"+catid)
		
		var that = this;
//  	var url = 'http://datainfo.duapp.com/shopdata/getGoods.php?callback='
		var url = 'http://10.9.160.52:3000/kind/list'
		MyAjax.getData(url,{
			params:{
				catid:catid
			}
		},(data) =>{
			console.log(data)
			if(data==0){
				that.setState({
					list:[]
				})
			}else{
				console.log(data[0].goods_list);
				console.log(eval(data)[0].goods_list)
				that.setState({
					list:eval(data)[0].goods_list
				})
			}
		})
	}
	
	componentWillMount(){
//		console.log(this.props.match.params.catid)
		var catid = this.props.match.params.catid;
		this.getData(catid)
	}
	
  //点击左侧列表，url地址栏发生变化，监听组件的更新  ---  vue中的watch
	componentWillReceiveProps(nextProps){
//		console.log(nextProps)
		var catid = nextProps.match.params.catid;
		this.getData(catid)
	}
	render(){
		var arr = [];
		if(this.state.list.length>0){
			this.state.list.map((item,index) => {
				arr.push(<Link to={"/detail/" + item.product_id} key={item.product_id} >
					<li className="ml_none">
						<p className="imgwarpper">
							<img src={item.big_thumb}/>
						</p>
						<div className="list_con">
							<p className="en_name">{item.brand_name}</p>
							<p className="price_warpper">￥{item.market_price}</p>	
						</div>
						
						
						
					</li></Link>)
			})
		}else{
			arr="无数据"
		}
		console.log({arr})
		return(
			<div className="detailwarppers">
				<div className="detailwarppers_p">
					<img src="http://img550.5lux.com.cn/2017/03/31/mn/149095990798_750x456.jpg" alt=""/>
				</div>
				<div className="list_content">
					<ul className="tabtop">{
						this.state.taptop.map((item,index)=>{
							return <li key={"taptop"+index} className="item">
								<span>{item.name}</span>
								<i className={item.icon}></i>
							</li>
						})
					}
						this.state.taptop.map((item,index)=>{

						})
					</ul>
				</div>
				<div className="adv1">
				<ul className="goods_list_warpper">
			  		{arr}
			  		
				</ul></div>
			</div>
			 
		)
	}
}
export default List;