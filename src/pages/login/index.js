import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
   render () {
    console.log(this.props)
     return (
        <LoginWrapper>
          <LoginBox>
          	<Input placeholder='账号' ref={(input)=>{this.account = input}}/>
          	<Input placeholder='密码' type='password' ref={(input)=>{this.password = input}}/>
          	<Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }  
}

const mapDispatch = (dispath) => ({
  login (accountElem, passwordElem) {
    dispath(actionCreators.login(accountElem.value, passwordElem.value))
    
  }
})


export default connect(null, mapDispatch)(Login);