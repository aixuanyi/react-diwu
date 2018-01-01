import React from 'react'

import {Form, Input,Button, Layout, Breadcrumb,message} from 'antd';
import MyAjax from './../md/MyAjax.js'
const FormItem = Form.Item;
const {  Content} = Layout;

class AddKind extends React.Component{
	constructor(props){
		
		super(props);
		
		this.state = {
			
		}
	}
	addKind(){
		var insertobj = this.props.form.getFieldsValue()
		var that = this;
		var addurl = 'http://localhost:3000/kind/addKind'
	    MyAjax.getData(addurl,{
	    	params:{
	    		
	    		insertobj:insertobj
	    	}
	    },(data)=>{
	    	if(data == "1"){
	      		message.success('添加成功');
	      		window.location.href = "/#/kind"
	      	}
	    })
   		
	}
	render(){
		const formItemLayout = { 
		 	labelCol: { span: 4 },
      		wrapperCol: { span: 14 }}
		const buttonItemLayout = {
			wrapperCol: { span: 14, offset: 4 }
		}
		 const {getFieldDecorator} = this.props.form;
	    return (
	       <Layout style={{ padding: '0 24px 24px' }}>
	        <Breadcrumb style={{ margin: '16px 0' }}>
	          <Breadcrumb.Item>Product</Breadcrumb.Item>
	          <Breadcrumb.Item>AddKind</Breadcrumb.Item>
	          
	        </Breadcrumb>
	        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 600 }}>
	         	<form layout='horizontal' >
			      	 <FormItem
			            label="ID"
			            {...formItemLayout}
			          >
			      	 	
			             {getFieldDecorator('catid')(<Input placeholder="请输入id" />)}
			          </FormItem>
			          <FormItem
			            label="Kind"
			            {...formItemLayout}
			          >
			          	
			            {getFieldDecorator('cata_name')(<Input placeholder="请输入种类" />)}
			          </FormItem>
			          <FormItem {...buttonItemLayout}>
			            <Button type="primary" onClick={this.addKind.bind(this)}>添加</Button>
			          </FormItem>
			      </form>
	        </Content>
	      </Layout>
	    )
	  }
}
AddKind= Form.create()(AddKind);
export default AddKind
