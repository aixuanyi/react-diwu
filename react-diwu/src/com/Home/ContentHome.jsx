import React from 'react';

class ContentHome extends React.Component{
  constructor(props){
    super(props);
			this.state={
                listImg:[{
                            img:"http://img550.5lux.com.cn/2017/10/19/hi/150840106722_800x800_350x350.jpg",
                            name:"KIEHL'S  科颜氏",
                            price:"￥242"
                         },
                        {
                            img:"http://img550.5lux.com.cn/2017/10/19/hi/150840106722_800x800_350x350.jpg",
                            name:"KIEHL'S  科颜氏",
                            price:"￥242"
                        },
                        {
                            img:"http://img550.5lux.com.cn/2017/10/19/hi/150840106722_800x800_350x350.jpg",
                            name:"KIEHL'S  科颜氏",
                            price:"￥242"
                        },
                        {
                            img:"http://img550.5lux.com.cn/2017/10/19/hi/150840106722_800x800_350x350.jpg",
                            name:"KIEHL'S  科颜氏",
                            price:"￥242"
                        },
                        {
                            img:"http://img550.5lux.com.cn/2017/10/19/hi/150840106722_800x800_350x350.jpg",
                            name:"KIEHL'S  科颜氏",
                            price:"￥242"
                        }

                        
                    ]
			}
  }

  render(){
    return (
        <div className="content">
            <div className="new_register">
                <img src="http://img550.5lux.com.cn/2017/12/15/fg/151333659327_750x586.jpg" alt=""/>
            </div>
            <div className="new_register" >
                <img src="http://img550.5lux.com.cn/2017/12/15/st/151333659095_750x586.jpg" alt=""/>
                <div className="resgister_new">
                    <ul className="resgister_warpper">
                        <li><img src="http://img550.5lux.com.cn/2017/03/31/rs/149095371490_170x170.jpg" alt=""/></li>
                        <li><img src="http://img550.5lux.com.cn/2017/03/31/np/149095371411_170x170.jpg" alt=""/></li>
                        <li><img src="http://img550.5lux.com.cn/2017/03/31/qr/149095371397_170x170.jpg" alt=""/></li>
                        <li><img src="http://img550.5lux.com.cn/2017/03/31/ij/149095371483_170x170.jpg" alt=""/></li>
                    </ul>
                </div>
            </div>
            
            <div className="new_register">
                <img src="http://img550.5lux.com.cn/2017/12/15/wx/151330368835_750x586.jpg" alt=""/>
            </div>
            <div className="new_register">
                <img src="http://img550.5lux.com.cn/2017/11/11/qr/151040604636_750x586.jpg" alt=""/>
            </div>

            <div className="new_register new_register_hook">
                <div className="artical_link">
                    <div>
                         <img src="http://img550.5lux.com.cn/2017/12/18/lm/151358784163_750x586.jpg" alt=""/>
                    </div>
                   <div className="artical-warpper">
                    <strong className="name"> 入冬保湿  拒绝干皮 </strong> 
                    <p className="detail"> 明明已经认真做了护理，冬天的肌肤却依旧干燥紧绷，只有选对合适的护肤品，才能与干皮say byebye，La Mer海蓝之谜赋活保湿精华露￥ 1710 。</p> 
                    </div>
                </div>
                    
                
                <div className="clearscroll">
                    <div className="ul-warpper">
                        <ul className="wrapperul">{
                             this.state.listImg.map((item,index)=>{
                                return <li key={"listImg"+index} className="item">
                                    <div><img src={item.img} alt=""/></div>
                                    <p>{item.name}</p>
                                    <p className="item_p">{item.price}</p>
                                </li>
                            })
                        }
                           
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
  }
}


export default ContentHome;