import React, { Component } from 'react';
import {connect} from 'react-redux';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {actionCreators} from './store';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
 } from './style';

class Home extends Component {
   render () {
      return (
        <HomeWrapper>
           <HomeLeft>
              <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4586/2eff4db8c6dac6253049da311e4f65359e075775.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
              <Topic />
              <List />
           </HomeLeft>
           <HomeRight>
              <Recommend />
              <Writer />
           </HomeRight>
        </HomeWrapper>
      )
   }
   componentDidMount () {
      this.props.changeHomeData();
   }   
}

const mapDispatch = (dispatch)=>({
   changeHomeData () {
     const action = actionCreators.getHomeInfo();
     dispatch(action);
   }
})

export default connect(null, mapDispatch)(Home);