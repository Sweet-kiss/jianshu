import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';

class Header extends Component {

	render() {
		return (
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
			            setTimeout={200}
			            classNames="slide"
			         >
				       <NavSearch
				         className={this.props.focused?'focused':''}
				         onFocus = {this.handleInputFocus}
				         onBlur = {this.handleInputBlur}
				       ></NavSearch>
				      </CSSTransition>
				         <i className={this.props.focused?'focused iconfont icon-fangdajing':'iconfont icon-fangdajing'}>&#xe662;</i>
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
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToPrps, mapDispatchToProps)(Header);