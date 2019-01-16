import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const middlewares = [
    routerMiddleware(history)
  ];

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const storeEnhancers = [middlewareEnhancer];
  let composedEnhancer;

  if (process.env.NODE_ENV !== 'production') {
    composedEnhancer = composeWithDevTools(compose(...storeEnhancers));
  } else {
    composedEnhancer = compose(...storeEnhancers);
  }

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composedEnhancer
  );

  if (process.env.NODE_ENV !== 'production') {
		if (module.hot) {
			module.hot.accept('./reducers', () => {
				const newReducer = require('./reducers').default;
				store.replaceReducer(newReducer);
			});
		}
	}

  return store;
}