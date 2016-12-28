import {combineReducers} from 'redux';
import displayReducer from './display';
import searchReducer from './search';
import codeBlockReducer from './code';
import loadReducer from './load';

const rootReducer = combineReducers({
  code:codeBlockReducer,
  search:searchReducer,
  display:displayReducer,
  load: loadReducer
})

export default rootReducer;
