import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';
import rootReducer from './reducer/reducer-root';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {
  posts: {},
};

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
