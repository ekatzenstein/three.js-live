import {combineReducers} from 'redux';
import displayReducer from './display';
import searchReducer from './search';
import codeBlockReducer from './codeBlock';
import loadReducer from './load';

const rootReducer = combineReducers({
  codeBlock:codeBlockReducer,
  search:searchReducer,
  display:displayReducer,
  load: loadReducer
})

export default rootReducer;
