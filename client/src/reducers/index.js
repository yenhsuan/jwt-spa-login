import { combineReducers } from 'redux';
import TestReducer from './TestReducer';

// const viewModel = combineReducers({});

const dataModel = combineReducers({
  test: TestReducer,
});

const rootReducer = combineReducers({
  dataModel,
});

export default rootReducer;
