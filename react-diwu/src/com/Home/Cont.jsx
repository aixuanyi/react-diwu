import React from 'react';

class Cont extends React.Component{
  constructor(props){
    super(props);
			this.state={
				listImg:[
         " http://img550.5lux.com.cn/2017/12/15/hi/151333658721_368x260.jpg",
          "http://img550.5lux.com.cn/2017/12/15/np/151333658847_368x260.jpg",
          "http://img550.5lux.com.cn/2017/12/15/np/151333658958_368x260.jpg",
          "http://img550.5lux.com.cn/2017/12/15/lm/151333658848_368x260.jpg"
        ]
			}
  }

  render(){
    return (
		<div className="adv1">
      <ul className="adv1_warpper">
        {
          this.state.listImg.map((item,index)=>{
            return <li key={"listImg"+index} className="adv1_li">
              <img src={item} alt=""/>
            </li>
          })
        }
      </ul>
	
		</div>
    )
  }
}


export default Cont;