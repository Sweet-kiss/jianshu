import React, {Component} from 'react';
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

class Header extends Component {

  getListArea () {
     const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
     const newList = list.toJS();
     const pageList = [];
    
     if(newList.length){
       for (let i=(page-1)*10; i<page*10; i++) {
          pageList.push (
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
       }      
     }


     if(focused || mouseIn) {
       return (
          <SearchInfo 
              onMouseEnter = {handleMouseEnter} 
              onMouseLeave = {handleMouseLeave}
          >
             <SearchInfoTitle>
               热门搜索
               <SearchInfoSwitch 
               onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}>
                <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
               </SearchInfoSwitch>
             </SearchInfoTitle>
             <div>
              <SearchInfoList>
                 {pageList}
              </SearchInfoList>
             </div>
          </SearchInfo>
       )
     }else {
       return null;
     }    
  }

  render () {
    const {focused, handleInputFocus, handleInputBlur, list} = this.props;
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
                  in={this.props.focused}
                  timeout={200}
                  classNames="slide"
               >
                 <NavSearch
                   className={focused?'focused':''}
                   onFocus = {()=>handleInputFocus(list)}
                   onBlur = {handleInputBlur}
                 ></NavSearch>
                </CSSTransition>
                   <i className={focused?'focused iconfont icon-fangdajing':'iconfont icon-fangdajing'}>&#xe662;</i>
                {this.getListArea()}
             </SearchWrapper>
          </Nav>
          <Addition>
             <Button className="writting"><i className="iconfont icon-yumao">&#xe60b;</i>写文章</Button>
             <Button className="reg">注册</Button>
          </Addition>
      </HeaderWrapper>  
  )     
  }
}


const mapStateToPrps = (state) => {
  return {
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     handleInputFocus (list) {
      (list.size === 0) && dispatch(actionCreators.getList()); 
       dispatch(actionCreators.searchFocus());
     },
     handleInputBlur () {
       dispatch(actionCreators.searchBlur());
     },
     handleMouseEnter () {
       dispatch(actionCreators.mouseEnter());
     },
     handleMouseLeave () {
       dispatch(actionCreators.mouseLeave());
     },
     handleChangePage (page, totalPage, spin) {
       let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
       if(originAngle) {
         originAngle = parseInt(originAngle, 10);
       }else{
         originAngle = 0;
       }

       spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
       // console.log(spin.style.transform);
       if(page<totalPage){
          dispatch(actionCreators.changePage(page+1));
       }else{
         dispatch(actionCreators.changePage(1));
       }
       
     }
  }
}

export default connect(mapStateToPrps, mapDispatchToProps)(Header);