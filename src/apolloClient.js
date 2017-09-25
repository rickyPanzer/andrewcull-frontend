// /app/src/apolloClient.js
import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';

// import {secret} from './config';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
    opts: {
        credentials: 'true',
    }
    // transportBatching: true,
});

networkInterface.use([{
  applyMiddleware(req,next){
    console.log('applying middleware in the networkInterface');
    if(!req.options.headers){
        req.options.headers={};
    }

    const token = localStorage.getItem('token') ? localStorage.getItem('token') : localStorage.getItem('pinToken');
    console.log('token', token, req.request.operationName);
    if (token) {
      req.options.headers.authorization = token;
    }
    // else {
    //   const user = 'general'
    //   const password = secret;
    //   req.options.headers.authorization = btoa(`${user}:${password}`);
    // }
    // // req.options.headers.authorization = token? token : null;
    // //console.log(req.options.headers.authorization);
    // req.user_id = 5;
    next();
 }
}]);

const client = new ApolloClient({
  networkInterface
});
export default client;
