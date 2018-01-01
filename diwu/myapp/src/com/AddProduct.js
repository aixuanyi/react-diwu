import React from 'react'
import $ from 'jquery'
import {Form, Input,Button, Layout, Breadcrumb,message,Select,Upload, Icon, Modal} from 'antd';
import MyAjax from './../md/MyAjax.js'

import './../css/add.css'
const {  Content} = Layout;


class AddProduct extends React.Component{
	constructor(props){
		
		super(props);
		
	}
	

	render(){
		
		
	    return (
	       <Layout style={{ padding: '0 24px 24px' }}>
	        <Breadcrumb style={{ margin: '16px 0' }}>
	          <Breadcrumb.Item>Product</Breadcrumb.Item>
	          <Breadcrumb.Item>AddProduct</Breadcrumb.Item>
	          
	        </Breadcrumb>
	        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 600 }}>
	        	<form id="form" method="post" encType="multipart/form-data" action = "javascript:;">
	        		<div className="formItem">
	        			<label>产品类别:</label>
	        			<input id="kind" type="text" defaultValue="美妆"/>
	        		</div>
	        		<div className="formItem">
	        			<label>产品ID:</label>
	        			<input id="goodID" type="text" defaultValue="3325380"/>
	        		</div>
	        		<div className="formItem">
	        			<label>产品名称:</label>
	        			<input id="goodName" type="text" defaultValue="L'Occitane欧舒丹 芍药花香润手霜"/>
	        		</div>
	        		<div className="formItem">
	        			<label>品牌名称:</label>
	        			<input id="brandName" type="text" defaultValue="L'Occitane"/>
	        		</div>
	        		<div className="formItem">
	        			<label>市场价格:</label>
	        			<input id="marketPrice" type="text" defaultValue="￥85"/>
	        		</div>
	        		<div className="formItem">
	        			<label>产品价格:</label>
	        			<input id="price" type="text" defaultValue="￥81"/>
	        		</div>
	        		<div className="formItem">
	        			<label>产品图片:</label>
	        			<input id="file" className="addImg" type="file" />
	        		</div>
	        		<div className="formItem btn">
	        			<Button type="primary" id="btn">添加</Button>
	        		</div>
	        	</form>
							
	        </Content>
	      </Layout>
	    )
	  }
	componentDidMount(){
		$("#btn").on('click',function(){
			var file = document.getElementById("file")
			var formData = new FormData();
			formData.append('cata_name',$("#kind").val());
			formData.append('product_id',$("#goodID").val());
			formData.append('good_name',$("#goodName").val());
			formData.append('brand_name',$("#brandName").val());
			
			formData.append('market_price',$("#marketPrice").val());
			formData.append('product_price',$("#price").val())
			formData.append('file',file.files[0]);
			$.ajax({
				type:"post",
				url:"http://localhost:3000/product/addProduct",
				data:formData,
				cache:false,
				contentType:false,
				processData:false,
				success:function(data){
					console.log(data)
					if(data=="1"){
						alert("插入成功")
					}
				}
			});
		})
	}
}

export default AddProduct
