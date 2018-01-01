import React from 'react'
import {Route,Switch,Redirect,Link} from 'react-router-dom'
import MyAjax from './md/MyAjax.js'
import detail from './detail.scss';
 
class Detail extends React.Component {
  constructor(props){
    super(props)
    this.getData = this.getData.bind(this);
    this.state = {
      proItem:[],
      product_id:0,
      goodsID:0,
      oneItem:[],
      twoItem:[],
      good_id:0
    }
  }
  componentWillMount(){
    var product_id = this.props.match.params.goodsID;
    var good_id = this.state.good_id;
    console.log(this.props)
   	this.getData(product_id)
  }
  
  getData(product_id){
    var that = this;
		var url = 'http://10.9.160.52:3000/product'
    MyAjax.getData(url, {
      params:{
        product_id: product_id
      }
    }, (data) => {
    	console.log(data)
      if(data == 0){
        that.setState({
          proItem:[]
        })
      }else{
        that.setState({
          proItem:eval(data),
          product_id:eval(data)[0].product_id,
          good_id:eval(data)[0].good_id
        })
        console.log(data)
      }
    })
    
	var url = 'http://api.restful.5lux.com.cn/good/goodsdetail/?id='+product_id+'&from=&mtoken=';  
    MyAjax.getData(url, {
      params:{
        product_id: product_id
      }
    }, (data) => {
    	
    //	console.log(data.data.goods_gallery)
      if(data == 0){
        that.setState({
          detailItem:[]
        })
      }else{
        that.setState({

        	
          oneItem:data.data.goods_gallery,
          
          product_id:product_id
        })
       console.log(that.state.oneItem)
//     console.log(data)
      }
    })  
    
    
  }
  
   addCart(){
    var url = 'http://10.9.160.52:3000/cart/updateCar'
    MyAjax.getData(url, {
      params:{
        userID: 'bk1719',
        product_id:this.state.product_id,
        number:1
      }
    }, (data) => {
    	console.log(data)
      if(data == "1"){
      	alert("加入购物车成功")
      }else{
//    	alert("加入购物车失败")
        
      }
      
    })
  } 
  backhisory(){
  	window.history.back( )
  }
 
  render(){
    if(this.state.proItem.length >0){
      return (
        <div className = "container">
        	
        	
            <div id='content'>
            	<div className="goodsdetail_top">
            			<i onClick={this.backhisory.bind(this)} className="iconfont icon-zuojiantou"></i>
            	</div>
            	
            	<div className="bannerwarpper ">
		            	<img src={this.state.proItem[0].big_thumb} />
            	</div>
            	
            	<div className="extrawarpper">
            			<div className="extra">
            				<span className="price">	￥{this.state.proItem[0].promote_price}
            				</span>
            				<span className="oldprice">￥{this.state.proItem[0].market_price}
            				</span>
            			</div>
            	</div>
            	
            	<div className="tittlewarpper">
            			<div className="detail">
            				{this.state.proItem[0].brand_name}
            			</div>
            	</div>
            	
            	<div className="premote">	
            	
		            	<div className="cost border-1px ">
		            				<div className="low"> 
		            					<span className="left">满赠</span>
		            					<span className="center">订单满9999元送价值1199元时尚管家服务</span> 
		            				</div>
		            	</div>
		            	<div className="cost border-none">
            					<div className="spourt">
            					<ul className="spourt_warpper">
		            					<li className="spourt_list"> 
			            					<i className="iconfont icon-duigou1"></i> 
			            					<span className="title">正品保证</span> 
		            					</li><li className="spourt_list"> 
			            					<i className="iconfont icon-duigou1"></i> 
			            					<span className="title">包关税</span> 
		            					</li><li className="spourt_list"> 
			            					<i className="iconfont icon-duigou1"></i> 
			            					<span className="title">包邮</span> 
		            					</li>
		            					<li className="spourt_list"> 
			            					<i className="iconfont icon-duigou1"></i>
			            					<span className="title">有质量问题支持7天退换货</span> 
		            					</li>
		            					<li className="spourt_list"> 
			            					<i className="iconfont icon-duigou1"></i> 
			            					<span className="title">慢必赔</span>
		            					</li><li className="spourt_list"> 
			            					<i className="iconfont icon-duigou1"></i> 
			            					<span className="title">售后服务</span> 
            					</li> </ul> </div>
            			</div>
            	</div>
	    			<div className="arg bgfff">
	    					<div className="arg bgfff">
	        					<div className="list border-1px">
	        						<span className="list_left">产品参数</span>
	        						
	        					</div>
	        					
	        					<div className="list border-1px">
	        						<span className="list_left">  
	            						<span> 
		            						<span> 大小:all </span>
	        								<span> 颜色:银色 </span> </span> 
	        								<span>数量:1</span> 
	        							</span>
	        					</div>
	    					</div>
	    			</div>
            	
            	<div className="xiangqing">
            		<div className="xiangqingtitle">
            			<span className="line"></span>
            			<span className="text">商品详情</span>
            			<span className="line"></span>
            		</div>
            		<ul className="goods_detail_img_text">
            			{
            				this.state.oneItem.map((item,index)=>{
            					return <li key={"oneItem"+index}>
            								<img src={item.filepath} alt=""/>
            							</li>
            				})
            			}
            		</ul>
            	</div>
            	
            	<div className="xiangqing">
            		<div className="xiangqingtitle">
            			<span className="line"></span>
            			<span className="text">正品保障</span>
            			<span className="line"></span>
            		</div>
            		<div className="baozhang">
            			<img src="http://img550.5lux.com.cn/2017/09/22/bc/150607050523_870x490.jpg" alt=""/>
            		</div>
            	</div>
            	
             	<div className="xiangqing">
            		<div className="xiangqingtitle">
            			<span className="line"></span>
            			<span className="text">关于第五大道</span>
            			<span className="line"></span>
            		</div>
            		          		
            		<div className="baozhang">
            			<img src="http://img550.5lux.com.cn/2017/05/02/kl/149370942723_690x388.jpg" alt=""/>
            		</div>
            	</div>           	
            	
              	<div className="xiangqing">
            		<div className="xiangqingtitle">
            			<span className="line"></span>
            			<span className="text">购物温馨提示</span>
            			<span className="line"></span>
            		</div>
            		          		
            		<div className="content">
            			<h2 className="name">关于价格:</h2>
            			<p className="text">第五大道价：数字部分为商品的销售价，是您最终决定是否购买商品的依据。</p>
            			<p className="text">划线价：划线价为参考价或市场价，包含：品牌专柜标价、商品吊牌价或厂商指导价、建议零售价等，仅供参考，不作为购物依据。</p>
            			<p className="text">折扣：若商品显示出某个具体的折扣数字，计算出的优惠比例或优惠金额，仅供参考。</p>
               			<h2 className="name">关于商品详情:</h2>
            			<p className="text">商品详情包含商品图片、尺寸、材质、产地、功能等，是遵照经销商提供的资料录入，商品图片部分由品牌方／经销商提供，部分由第五大道自行拍摄，不排除产生的轻微色差，若因此出现的购买差错，我们会协助办理退换货，但不作为索赔依据。</p>
                		<h2 className="name">关于物流:</h2>
            			<p className="text">第五大道坚持快速、安全把您的商品送达目的地，若出现错发、漏发等错误请及时告知我们，我们会第一时间解决问题，挽回您的损失。</p>
            		</div>
            	</div>            	
            	
            	
            	
            </div>
            <footer id="footer" className="btm">
            	<span className="span kefy">
            		<span className="lg">
            		<i className="iconfont"></i>
            		<span>客服</span>
            		</span>
            		
            	</span>
            	<span className="span kefy">
            		<span className="lg">
            		<i className="iconfont"></i>
            		<span><Link to='/cart'>购物袋</Link></span>
            		</span>
            	</span>
            	<span className="span wuda">
              		<button onClick={this.addCart.bind(this)}>加入购物车</button>
            	</span>
            	<span className="span goum">立即购买</span>
            
            
            </footer>
        </div>
        
      )
    }else{
      return (
        <div className = "container">
            <header id="header">
              header
            </header>
            <div id='content'>
             商品已下架
            </div>
            <footer id="footer">
              footer
            </footer>
        </div>
      )
    }
    
  }
}

export default Detail;