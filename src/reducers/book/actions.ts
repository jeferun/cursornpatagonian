import { getBooks } from './../../services/books';


// enum types auctionsu
export enum BookTypes {
  SET_BOOKS = 'SET_BOOKS',
  SET_ERROR = 'SET_ERROR',
  SET_LOADING = 'SET_LOADING', // p*
}

// action dispatch
export const setBooks = (value: IBook) => (({
  type: BookTypes.SET_BOOKS,
  payload: { value }
}));

export const setErrorOccurred = (value: string) => (({
  type: BookTypes.SET_ERROR,
  payload: { value }
}));

export const setLoading = (value: boolean) => (({
  type: BookTypes.SET_LOADING,
  payload: { value }
}));

export const getBooksAction = (search = '') => async (dispatch: any, _: any) => { // p*
  dispatch(setLoading(true));
  try {
    const { success, data } = await getBooks(search);
    const error = "An unknown error occurred :'(";
    if (success) {
      dispatch(setBooks(data));
    } else {
      dispatch(setErrorOccurred(error));
    }
  } catch (error) {
    dispatch(setErrorOccurred(error));
  } finally {
    dispatch(setLoading(false));
  }
};