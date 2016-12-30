import {combineReducers} from 'redux';
import displayReducer from './display';
import searchReducer from './search';
import codeBlockReducer from './code';
import loadReducer from './load';
import iFrameReducer from './iframe';

const rootReducer = combineReducers({
  code:codeBlockReducer,
  search:searchReducer,
  display:displayReducer,
  load: loadReducer,
  iframe: iFrameReducer
})

export default rootReducer;
