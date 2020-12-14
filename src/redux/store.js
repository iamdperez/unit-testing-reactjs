import { compose, createStore } from 'redux';
import reducers from './reducers';
const store = createStore(
  reducers,
  compose(
    typeof window === 'object' &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
