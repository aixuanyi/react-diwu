import React from 'react'
import {Button, Layout, Breadcrumb,message,Table,Divider} from 'antd';
import MyAjax from './../md/MyAjax.js'
const {  Content} = Layout;

class Cart extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cartList:[]
		}
	}
	componentWillMount(){
		var that = this;
		var url = 'http://localhost:3000/cart'
		MyAjax.getData(url,{},(data)=>{
			that.setState({
				cartList:data
			})
		})
	}
	delete(id){
		var that = this;
		var carturl = 'http://localhost:3000/cart/updateCar'
		MyAjax.getData(carturl,{
			params:{
				product_id:id,
				number:0
			}
		},(data)=>{
			if(data=="删除成功"){
				message.success("删除成功")
				window.location.reload()
			}
		})
	}
	render(){
		/*表格表头*/
		const columns = [{
		  title: '产品ID',
		  dataIndex: 'product_id',
		  key:'product_id',
		  render: text => <a href="javascript:;">{text}</a>
		}, 
		{
		  title: '产品名称',
		  dataIndex: 'good_name',
		  key:'good_name',
		  render: text => <a href="javascript:;">{text}</a>
		},
		{
		  title: '产品价格',
		  dataIndex: 'product_price',
		  key:'product_price',
		  render: text => <a href="javascript:;">{text}</a>
		},{
		  title: '产品数量',
		  dataIndex: 'number',
		  key:'number',
		  render: text => <a href="javascript:;">{text}</a>
		},{
		  title: '产品图片',
		  dataIndex: 'big_thumb',
		  key:'big_thumb',
		  render: text => <img src={text} />
		},
		{
		  title: 'Action',
		  key: 'action',
		  render: (text, record) => (
		    <span>
		      <a href="javascript:;" onClick={this.delete.bind(this,record.product_id)}>删除</a>
		    </span>
		  ),
		}];
/*表格数据*/
		var data = [];
		this.state.cartList.map((item,index)=>{
			data.push({
				key:index,
				product_id:item.product_id,
				good_name:item.good_name,
				product_price:item.product_price,
				number:item.number,
				big_thumb:item.big_thumb
			})
		})
		const pagination = {
			defaultPageSize:4,
			defaultCurrent:1
		}
		return(
			<Layout style={{ padding: '0 24px 24px' }}>
	        <Breadcrumb style={{ margin: '16px 0' }}>
	          <Breadcrumb.Item>Product</Breadcrumb.Item>
	          <Breadcrumb.Item>Cart</Breadcrumb.Item>
	          
	        </Breadcrumb>
	        <Content style={{ background: '#fff', padding: 20, margin: 0, minHeight: 600 }}>
	         <Table columns={columns} dataSource={data} pagination={pagination} />
	         
	        </Content>
	      </Layout>
		)
	}
}
export default Cart
