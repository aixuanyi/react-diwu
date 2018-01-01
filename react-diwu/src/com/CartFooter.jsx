import React from 'react'
import "./css/CartFooter.css"
import store from '../redux/store.js'
import MyAjax from "../md/MyAjax.js"
class CartFooter extends React.Component {
	constructor(props){
	  super(props)
	  this.state = {
	  	ischoose:false
	  }
	}
	choose(){
		var oBtn = document.getElementById("iconfont")
		if(oBtn.style.color == "rgb(191, 157, 96)"){
			oBtn.style.color = "#666"
			this.setState({
				ischoose:true
			})
			store.dispatch({
		      type:"ALL_CHOOSE",
		      ischoose:this.state.ischoose
		    })
		}else{
			oBtn.style.color = "#bf9d60"
			this.setState({
				ischoose:false
			})
			store.dispatch({
		      type:"ALL_CHOOSE",
		      ischoose:this.state.ischoose
		    })		
		}
		//console.log(store.getState().allReducer)
	}
	//获取删除后的数据，更新store
	getData(){
		var url = "http://10.9.160.52:3000/cart";
		MyAjax.getData(url,{},(data)=>{
			if(data == 0){
				alert("暂无数据")
			}else{
				//获取购物车列表改变store数据
				store.dispatch({
			      type:"CART_LIST",
			      list:data
			 	})
				
				var sum = 0;
				var num = 0;
				store.getState().listReducer.map((item)=>{
					sum += item.product_price*1 * item.number*1 
					num += item.number*1
				})
				store.dispatch({
			      type:"TOTAL_PRICE",
			      sum:sum
			    })
				store.dispatch({
			      type:"TOTAL_NUM",
			      num:num
			    })
			}
		})
	}
	//修改购物车数据
	delate(){
		var that = this;
		var url = 'http://10.9.160.52:3000/cart/updateCar'
		
		var cartList = store.getState().listReducer;
//		console.log(store.getState().listReducer)
		var oBtn = document.getElementsByClassName("itemL")
		console.log(oBtn.length)
		for(var i =0;i<oBtn.length;i++){
			if(oBtn[i].style.color=="rgb(191, 157, 96)"){
				MyAjax.getData(url,{
					params:{	
						product_id:cartList[i].product_id,
						number:0
					}
				},(data) => {
					if(data == 0){
						alert("更新失败")
					}else{
						
					}
				})
				console.log(oBtn.length);
				console.log("第"+i+"个删除成功");
				this.getData()
			}
			
		}
		
	}
	
	render(){
//		console.log(store.getState().delateReducer)
		var arr = []
	  	if(store.getState().listReducer.length=="0"){
	  		arr.push(<div id="none" key="none"></div>)
	  	}else{
			if(store.getState().delateReducer){
				arr.push(
					<div id="item" key="delate">
						<input className="delate" type="button" value="删除" onClick={this.delate.bind(this)}/>
					</div>
					)
			}else{
				arr.push(
				<div id="item" key="pay">
					<div id="itemL" className="itemL" >
						<span id="iconfont" className="iconfont icon-xuanze" onClick={this.choose.bind(this)} style={{color:"#bf9d60"}}></span>
						<span className="all">全选</span>
					</div>
					<div className="itemC">
						<p className="total">合计 ￥{store.getState().totalReducer}</p>
						<p className="num">共计{store.getState().numReducer}件商品</p>
					</div>
					<div className="itemR">
						去结算
					</div>
				</div>
				)
			}

	    }
		return(
			<ul>
				{arr}
			</ul>
		)
	}
}
export default CartFooter;
