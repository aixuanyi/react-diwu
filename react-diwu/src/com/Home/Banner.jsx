import React from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';


class Banner extends React.Component {
  state = {
    data: ['', '', ''],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({

        data: ['2017/11/30/lm/151202019833_750x825', '2017/12/01/gh/151209518559_750x825', '2017/12/15/jk/151332924434_750x825'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank >
		
        <Carousel
          autoplay={true}
          infinite={true}
          selectedIndex={1}
        >
          {this.state.data.map(ii => (
            <a
              key={ii}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`http://img550.5lux.com.cn/${ii}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
               
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>

       



      </WingBlank>
    );
  }
}

export default Banner;