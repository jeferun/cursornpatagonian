import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bookReducer from './book';

const rootReducer = combineReducers({
  book: bookReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;