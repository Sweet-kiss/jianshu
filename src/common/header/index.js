import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch, 
  SearchInfo,
  SearchInfoTitle, 
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition, 
  Button, 
  SearchWrapper } from './style.js';
import { actionCreators } from './store';

const getListArea = (show) => {
   if(show) {
     return (
        <SearchInfo>
           <SearchInfoTitle>
             热门搜索
             <SearchInfoSwitch>换一批</SearchInfoSwitch>
           </SearchInfoTitle>
           <div>
            <SearchInfoList>
               <SearchInfoItem>教育</SearchInfoItem>
               <SearchInfoItem>教育</SearchInfoItem>
               <SearchInfoItem>教育</SearchInfoItem>
               <SearchInfoItem>教育</SearchInfoItem>
               <SearchInfoItem>教育</SearchInfoItem>
               <SearchInfoItem>教育</SearchInfoItem>
               <SearchInfoItem>教育</SearchInfoItem>
            </SearchInfoList>
           </div>
        </SearchInfo>
     )
   }else {
     return null;
   }
}

const Header = (props) => {
  return(
      <HeaderWrapper>
          <Logo />
          <Nav>
             <NavItem className='left active'>首页</NavItem>
             <NavItem className='left'>下载APP</NavItem>
             <NavItem className='right'>登录</NavItem>
             <NavItem className='right'>
                <i className="iconfont icon-Aa">&#xe607;</i>
             </NavItem>
             <SearchWrapper>
               <CSSTransition
                  in={props.focused}
                  timeout={200}
                  classNames="slide"
               >
                 <NavSearch
                   className={props.focused?'focused':''}
                   onFocus = {props.handleInputFocus}
                   onBlur = {props.handleInputBlur}
                 ></NavSearch>
                </CSSTransition>
                   <i className={props.focused?'focused iconfont icon-fangdajing':'iconfont icon-fangdajing'}>&#xe662;</i>
                {getListArea(props.focused)}
             </SearchWrapper>
          </Nav>
          <Addition>
             <Button className="writting"><i className="iconfont icon-yumao">&#xe60b;</i>写文章</Button>
             <Button className="reg">注册</Button>
          </Addition>
      </HeaderWrapper>  
  )  
}


const mapStateToPrps = (state) => {
  return {
    focused: state.getIn(['header','focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     handleInputFocus () {
       dispatch(actionCreators.searchFocus());
     },
     handleInputBlur () {
       dispatch(actionCreators.searchBlur());
     }
  }
}

export default connect(mapStateToPrps, mapDispatchToProps)(Header);