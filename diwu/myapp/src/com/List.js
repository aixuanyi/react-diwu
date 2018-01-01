import React from 'react'

import { Layout, Breadcrumb,Table, Icon, Divider } from 'antd';
import MyAjax from './../md/MyAjax.js'
const {  Content} = Layout;

class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			classList:[],
			
		}
	}
	componentWillMount(){
		var that = this;
		var url = 'http://localhost:3000/product/goodList'
		MyAjax.getData(url,{},(data) =>{
			that.setState({
				classList:data
			})
//		console.log(that.state.classList)
		})
		
	}
	
	render(){
		const columns = [{
		  title: 'ProductId',
		  dataIndex: 'product_id',
		  key: 'product_id',
		  render: text => <a href="#">{text}</a>,
		}, {
		  title: 'Name',
		  dataIndex: 'good_name',
		  key: 'good_name',
		}, {
		  title: 'MarketPrice',
		  dataIndex: 'market_price',
		  key: 'market_price',
		}, {
		  title: 'ProductPrice',
		  dataIndex: 'product_price',
		  key: 'product_price',
		},
		 {
		  title: 'ProductImg',
		  dataIndex: 'big_thumb',
		  key: 'big_thumb',
		  render: (text) => <img src={text} alt="" />
		}
		];
		const pagination = {
			defaultPageSize:4,
			defaultCurrent:1
		}
		var data = [];
		this.state.classList.map((item,index)=>{
			data.push({
				key:index,
				product_id:item.product_id,
				good_name:item.good_name,
				market_price:item.market_price,
				product_price:item.product_price,
				big_thumb:item.big_thumb
			})
		})
	    return (
	       <Layout style={{ padding: '0 24px 24px' }}>
	        <Breadcrumb style={{ margin: '16px 0' }}>
	          <Breadcrumb.Item>Product</Breadcrumb.Item>
	          <Breadcrumb.Item>List</Breadcrumb.Item>
	          
	        </Breadcrumb>
	        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 600 }}>
	          	<Table columns={columns} dataSource={data} pagination={pagination} />
	        </Content>
	      </Layout>
	    )
	  }
}

export default List
