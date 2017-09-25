import client from './apolloClient';
import { createStore, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
// import promise from 'redux-promise';
import reducers from './reducers';
// import createLogger from 'redux-logger';


// const logger = createLogger();

// combines thunk and promise middlewares
// promise just takes a promised based http request and return to the reducers when it's done.
// thunk is what use to make custom middleware to trigger/dispatch multiple actions at the same time
const configureStore = () => {
  const middlewares = [thunk, client.middleware()];
  // if (process.env.NODE_ENV !== 'production') {
  //   middlewares.push(createLogger());
  // }

  return createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
