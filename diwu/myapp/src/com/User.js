import React from 'react'

import { Layout, Breadcrumb , Table,  Divider ,Modal ,message} from 'antd';
import MyAjax from './../md/MyAjax.js'
import store from './../store.js'

const {Content} = Layout;

class User extends React.Component{
	constructor(props){
		super(props);
		this.getData = this.getData.bind(this)
		this.state = {
			list:[],
			
		}
	}
	
	getData(){
		var that = this;
		var kindurl = 'http://localhost:3000/kind'
		MyAjax.getData(kindurl,{},(data)=>{
//			console.log(data)
			store.dispatch({
	      type:"KIND_LIST",
	      val:data
	    })
			
		})
	}
	
	componentWillMount(){
		this.getData()
	}

	render(){
				const columns = [{
		  title: '用户名称',
		  dataIndex: 'username',
		  key:'username',
		  render: text => <a href="javascript:;">{text}</a>
		}, 
		{
		  title: '产品名称',
		  dataIndex: 'good_name',
		  key:'good_name',
		  render: text => <a href="javascript:;">{text}</a>
		},
		];
/*表格数据*/
		var data = [];
		
//		console.log(data)
	    return (
	       <Layout style={{ padding: '0 24px 24px' }}>
	        <Breadcrumb style={{ margin: '16px 0' }}>
	          <Breadcrumb.Item>Product</Breadcrumb.Item>
	          <Breadcrumb.Item>User</Breadcrumb.Item>
	          
	        </Breadcrumb>
	        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 600 }}>
	          <Table columns={columns} dataSource={data} />
	        </Content>
	      </Layout>
	    )
	  }
}

export default User
