import React from 'react';
import {Link} from 'react-router-dom'
class Head extends React.Component{
  constructor(props){
    super(props);

  }
	
  render(){
    return (
		<div className="sticky">
				<div className="search">
				
		<Link to="/search">
			<div className="search_text" >
								<div className="search_logo"><i className="iconfont icon-sousuo"></i></div>
								<div className="search_logo_s">5LUX.COM</div>
			</div>
		</Link>
				
						
						<div className="shop_cart"><i className="iconfont icon-store"></i></div>
				</div>
		</div>
    )
  }
}


export default Head;