import React, { Component } from 'react';

import {Route,Switch,NavLink} from 'react-router-dom'
import { Layout, Menu,  Dropdown, Icon ,message} from 'antd';
import Kind from './com/Kind.js'
import List from './com/List.js'
import Cart from './com/Cart.js'
import User from './com/User.js'
import AddProduct from './com/AddProduct.js'
import AddKind from './com/AddKind.js'
const { SubMenu } = Menu;
const { Header, Sider } = Layout;

const onClick = function ({ key }) {
  message.info(`Click on item ${key}`);
};
const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">设置</Menu.Item>
    <Menu.Item key="2">退出</Menu.Item>
   
  </Menu>
);
class App extends Component {
	constructor(props){
		super(props)
	}
	
  render() {
    return (
      <Layout style={{minHeight:600}}>
    <Header className="header">
     
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' ,textAlign:'right' ,fontSize:'20px' }}
      >
         <Dropdown overlay={menu}>
			    <a className="ant-dropdown-link" href="javascript:;" style={{ color:'#fff' }}>
			      admin<Icon type="down" />
			    </a>
			  </Dropdown>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
         
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />用户管理</span>}>
            <Menu.Item key="1" ><NavLink to="/user">用户中心</NavLink></Menu.Item>
            
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />商品管理</span>}>
            <Menu.Item key="2" ><NavLink to="/kind">商品分类</NavLink></Menu.Item>
            <Menu.Item key="3"><NavLink to="/list">商品列表</NavLink></Menu.Item>
             <Menu.Item key="4"><NavLink to="/cart">购物车</NavLink></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />商品添加</span>}>
           
           <Menu.Item key="5"><NavLink  to="/addKind">添加分类</NavLink></Menu.Item>
            <Menu.Item key="6"><NavLink  to="/addProduct">添加商品</NavLink></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      		<Switch>
      			<Route path="/user" component = {User} />
      			<Route path="/kind" component = {Kind} />
      			<Route path="/list" component = {List} />
      			<Route path="/addKind" component = {AddKind} />
      			<Route path="/addProduct" component = {AddProduct} />
      			<Route path="/cart" component = {Cart} />
      			<Route path="/" component = {User}/>
      		</Switch>
    </Layout>
  </Layout>
    );
  }
}

export default App;
