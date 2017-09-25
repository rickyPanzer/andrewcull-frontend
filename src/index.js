import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import configureStore from './configureStore';
// import { AUTH_USER } from './actions/types';

import App from './components/app';
// import Welcome from './components/welcome';
// import Enroll from './components/enroll';
// import Courses from './components/courses';
// import Frontend from './components/frontend';
// import Backend from './components/backend';
// import Fullstack from './components/fullstack';
// import Account from './components/account';
// import Team from './components/team';
import client from './apolloClient';
// import buttonRow from './components/common/coursebuttonrow';
import './style/style.less';

const store = configureStore();

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
// if (token) {
//   // we need to update the application state
//   store.dispatch({ type: AUTH_USER });
// }

window.__myapp_container = document.querySelector('.injection')

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <BrowserRouter onUpdate={(args) => console.log(this)}>
      <Route path="*" component={App} />
    </BrowserRouter>
  </ApolloProvider>
  , window.__myapp_container);
