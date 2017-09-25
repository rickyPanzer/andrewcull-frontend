import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import client from '../apolloClient';

const rootReducer = combineReducers({
  form,
  apollo: client.reducer()
});

export default rootReducer;
