import React from 'react'
import "./css/Cart.css"
import store from '../redux/store.js'
import MyAjax from "../md/MyAjax.js" 
import CartHeader from './CartHeader.jsx';
class Cart extends React.Component {
	constructor(props){
	  super(props)
	  this.state = {
//	  	cartList : [],
//	  	total:"",
//	  	num:"",
	  	allchoose:store.getState().allReducer
	  }
	}
	getData(){
		var that = this;
		var url = "http://10.9.160.52:3000/cart";
		MyAjax.getData(url,{},(data)=>{
			if(data == 0){
				//alert("暂无数据")
			}else{
				//console.log(eval(data));
				var sum = 0;
				var num = 0;
//				that.setState({
//					cartList:data
//				})
//				console.log(this.state.cartList)
				
				//把购物车列表存入store
				store.dispatch({
			      type:"CART_LIST",
			      list:data
			   })
				store.getState().listReducer.map((item)=>{
					sum += item.product_price*1 * item.number*1 
					num += item.number*1
				})
//				this.setState.total = sum;
//				this.setState.num = num;
				
				//把购物车总价格存入store
				store.dispatch({
			      type:"TOTAL_PRICE",
			      sum:sum
			    })
				
				//把购物车商品数量存入store
				store.dispatch({
			      type:"TOTAL_NUM",
			      num:num
			    })
//				console.log(store.getState().totalReducer)
//				console.log(store.getState().numReducer)
				console.log(store.getState().listReducer)
				//console.log(this.setState.total)
			}
		})
	}
	componentDidUpdate(){
		console.log(store.getState().allReducer)
		if(store.getState().allReducer == true){
	  		var oBtn = document.getElementsByClassName("itemL")
	  		for(var i=0;i<oBtn.length;i++){
	  			oBtn[i].style.color = "#bf9d60"
	  		}
	  	}else if(store.getState().allReducer == false){
	  		var oBtn = document.getElementsByClassName("itemL")
	  		for(var i=0;i<oBtn.length;i++){
	  			oBtn[i].style.color = "#666"
	  		}
	  	}
//		console.log(store.getState().allReducer)
		if(store.getState().delateReducer==true){
			var oBtn = document.getElementsByClassName("itemL")
	  		for(var i=0;i<oBtn.length;i++){
	  			oBtn[i].style.color = "#666"
	  		}
		}
	}
	upData(item,number){
		var that = this;
		var url = 'http://10.9.160.52:3000/cart/updateCar'
		MyAjax.getData(url,{
			params:{
				
				product_id:item.product_id,
				number:number
			}
		},(data) => {
			if(data == 0){
				alert("更新失败")
			}else{
//				alert("ok");
				that.getData()
			}
		})
	}
	add(item,index){
		this.refs["btn"+index].removeAttribute("disabled")
		this.refs["btn"+index].style.color = "#666"
		var number = item.number*1 + 1;
		this.upData(item,number)
	}
	reduce(item,index){
		if(item.number=="1"){
			console.log(this.refs["btn"+index])
			this.refs["btn"+index].setAttribute("disabled","disabled")
			this.refs["btn"+index].style.color = "#ddd"
			alert("商品已经是最少数量！")
			return;
		}else{
			this.refs["btn"+index].removeAttribute("disabled")
			this.refs["btn"+index].style.color = "#666"
		}
		var number = item.number*1 - 1;
		this.upData(item,number);
	}
	componentWillMount(){
		this.getData();
		//console.log(this.state.cartList)
//	    console.log(this.state.allchoose)
	}
	choose(index){
//		console.log(index)
		var oBtn = document.getElementsByClassName("itemL")[index]
//		console.log(window.getComputedStyle(oBtn,null).color)
//
//		if(window.getComputedStyle(oBtn,null).color=="#bf9d60"){
//			oBtn.setAttribute("color","#666")
//		}else{
//			oBtn.setAttribute("color","#bf9d60")
//		}	
//		console.log(oBtn.style.color)//rgb(191, 157, 96)
		if(oBtn.style.color == "rgb(191, 157, 96)"){
			oBtn.style.color = "#666"
		}else{
			oBtn.style.color = "#bf9d60"
//			console.log(oBtn.style.color)
		}
	}
	componentDidMount(){
		document.getElementById("header").style.display="none"
//		if(store.getState().listReducer.length == "0"){
//	  		this.refs.delate.style.display = "none"
//	  	}
	}
	render(){
		var sum;
		var arr = []
		console.log(store.getState().listReducer.length)
		if(store.getState().listReducer.length>0){
			store.getState().listReducer.map((item,index)=>{
				arr.push(
					<li className="cartItem" key={index}>
						<div className="itemL iconfont icon-xuanze" ref="btn" onClick={this.choose.bind(this,index)} style={{color:"#bf9d60"}}></div>
						<div className="itemC">
							<img src={item.big_thumb} />
						</div>
						<div className="itemR">
							<p className="goodsName">{item.good_name}</p>
							<p className="color">色系</p>
							<p className="price">￥{item.product_price}</p>
						</div>
						<div className="changeNum">
							<button className="reduce" ref={"btn"+index} onClick={this.reduce.bind(this,item,index)} style={{color:"#666"}}>-</button>
							<span className="num">{item.number}</span>
							<button className="add" onClick={this.add.bind(this,item,index)}>+</button>
						</div>
					</li>
				)
			})	
		}else{
			arr.push(
				<div className="none" key="3">
					<p>暂无商品</p>
					<p>您的金袋子空了,快让它便奢侈吧</p>
					<button>去奢侈</button>
				</div>
			)
			
		}
		return(
			<div>
			
      		<CartHeader />
			
				<ul id="Cart">
				{arr}
			</ul>
			
			</div>
		)
	}
}
export default Cart;