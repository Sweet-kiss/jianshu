import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {GlobalStyle} from "./style";
import {GlobalStyle2} from "./statics/iconfont/iconfont.js";
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <GlobalStyle/>
          <GlobalStyle2 />
          <Header />
        </Provider>

    );
  }
}

export default App;
