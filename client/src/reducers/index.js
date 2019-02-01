import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import TestReducer from './TestReducer';

// const viewModel = combineReducers({});

const dataModel = combineReducers({
  test: TestReducer,
});

export default history => combineReducers({
  router: connectRouter(history),
  dataModel,
});
