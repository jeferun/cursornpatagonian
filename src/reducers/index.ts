import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bookReducer from './book';
import characterReducer from './characters';

const rootReducer = combineReducers({
  book: bookReducer,
  character: characterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
