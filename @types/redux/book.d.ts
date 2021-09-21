import { BookTypes } from './../../src/reducers/book/actions';

declare global {
  interface IBookState {
    books: IBook[];
    errorOccurred: string;
    loading: boolean;
  }
  
  interface GetBooks {
    type: BookTypes.GET_BOOKS;
    payload: { value: IBook[] };
  }
  
  type BookActions = GetBooks;
}