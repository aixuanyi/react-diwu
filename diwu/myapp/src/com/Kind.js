import React from 'react'

import { Layout, Breadcrumb , Table,  Divider ,Modal ,message, Form, Input ,Button} from 'antd';
import MyAjax from './../md/MyAjax.js'
import store from './../store.js'
import './../css/kind.css'
const FormItem = Form.Item;
const {Content} = Layout;
const confirm = Modal.confirm;


const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Update the collection"
        okText="Update"
        onCancel={onCancel}
        onOk={onCreate}
        
      >
        <Form layout="vertical">
          <FormItem label="catid" >
            {getFieldDecorator('catid', {
            	
              rules: [{ required: true, message: '请输入ID' }],
              
            })(
              <Input  />
            )}
          </FormItem>
          <FormItem label="cata_name">
            {getFieldDecorator('cata_name')(<Input type="text" />)}
          </FormItem>
          
        </Form>
      </Modal>
    );
  }
);



class Kind extends React.Component{
	constructor(props){
		super(props);
		this.getData = this.getData.bind(this)
		this.state = {
			list:[],
			visible: false,
			upid:""
		}
	}
	 showModal = (catid) => {
    this.setState({ visible: true , upid: catid});
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  handleCreate = () => {
    const form = this.form;
    
    var that = this;
    //获取表单的值,跟新数据 
    var updateobj=form.getFieldsValue()
    //id校验
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
	
      console.log('Received values of form: ', values);
      
      form.resetFields();
      this.setState({ visible: false });
       message.success('更新成功');
    });
    //更新数据
    var upurl = 'http://localhost:3000/kind/updateKind'
    MyAjax.getData(upurl,{
    	params:{
    		whereobj:that.state.upid,
    		updateobj:updateobj
    	}
    },(data)=>{
    	console.log(data)
    })
    
    window.location.reload(true)
    
  }
  saveFormRef = (form) => {
    this.form = form;
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
	//删除数据
	deleteItem(catid) {
	  var that = this;
	  confirm({
	    title: 'Do you Want to delete this item?',
	    
	    onOk() {
	    
	      console.log('OK');
	      var url = 'http://localhost:3000/kind/deleteKind';
	      MyAjax.getData(url,{
	      	params:{
	      		catid:catid
	      	}
	      },(data)=>{
	      	if(data.ok){
	      		message.success('删除成功');
	      		window.location.reload(true)
	      	}
	      })
	     var kindurl = 'http://localhost:3000/kind'
		MyAjax.getData(kindurl,{},(data)=>{
			store.dispatch({
	      type:"KIND_LIST",
	      val:data
	    })
		})
	    },
	    onCancel() {
	      console.log('Cancel');
	    },
	  });
	}
	componentWillMount(){
		this.getData()
	}

	render(){
		/*表格表头*/
		const columns = [{
		  title: 'Id',
		  dataIndex: 'catid',
		  key:'catid',
		  render: text => <a href="javascript:;">{text}</a>
		}, 
		{
		  title: 'Kind',
		  dataIndex: 'cata_name',
		  key:'cata_name',
		  render: text => <a href="javascript:;">{text}</a>
		}, {
		  title: 'Action',
		  key: 'action',
		  render: (text, record) => (
		    <span>
		      <Button type="primary" style={{background:'#f66',border:'0'}} onClick={this.showModal.bind(this,record.catid)}>Update </Button>
		      <CollectionCreateForm
		          ref={this.saveFormRef}
		          visible={this.state.visible}
		          onCancel={this.handleCancel}
		          onCreate={this.handleCreate}
		          
		        />
		      <Divider type="vertical" />
		      <Button type="primary" onClick={this.deleteItem.bind(this,record.catid)}>Delete</Button>
		    </span>
		  ),
		}];
/*表格数据*/
		var data = [];
		var arr = store.getState().listReducer[0]
		for(var i in arr){
			 data.push({
				key:i,
				catid:arr[i].catid,
				cata_name:arr[i].cata_name
			})
		}
		
//		console.log(data)
	    return (
	       <Layout style={{ padding: '0 24px 24px' }}>
	        <Breadcrumb style={{ margin: '16px 0' }}>
	          <Breadcrumb.Item>Product</Breadcrumb.Item>
	          <Breadcrumb.Item>Kind</Breadcrumb.Item>
	          
	        </Breadcrumb>
	        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 600 }}>
	          <Table columns={columns} dataSource={data} />
	        </Content>
	      </Layout>
	    )
	  }
}

export default Kind
