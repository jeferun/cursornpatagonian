import { BookTypes } from './actions';

const initialState: IBookState = {
  books: [],
  errorOccurred: '',
  loading: false,
};

function BookReducer(state = initialState, action: BookActions) {
  switch (action.type) {
    case BookTypes.SET_BOOKS: {
      const { value } = action.payload;
      return {
        ...state,
        books: value,
      };
    }
    case BookTypes.SET_ERROR: {
      const { value } = action.payload;
      return {
        ...state,
        errorOccurred: value,
      };
    }
    case BookTypes.SET_LOADING: {
      const { value } = action.payload;
      return {
        ...state,
        loading: value,
      };
    }

    default:
      return state;
  }
}

export default BookReducer;