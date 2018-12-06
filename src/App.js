import React, { Component } from 'react';
import {GlobalStyle} from "./style";
import {GlobalStyle2} from "./statics/iconfont/iconfont.js";
import Header from './common/header'

class App extends Component {
  render() {
    return (
        <div>
          <GlobalStyle/>
          <GlobalStyle2 />
          <Header />
        </div>

    );
  }
}

export default App;
