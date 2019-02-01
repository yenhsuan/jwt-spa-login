import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers/index';

export const history = createBrowserHistory();

const configureStore = (preloadedState) => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
      ),
    ),
  );

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = createRootReducer(history);
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
