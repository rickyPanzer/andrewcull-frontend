import React, { Component } from 'react';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';
import Header from './header';
import Home from './home/home';
import Footer from './footer/footer';

import '../style/style.less';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/accessories" exact component={Home} />
        <Route path="/boards" exact component={Home} />
        <Footer />
      </div>
    );
  }
}
