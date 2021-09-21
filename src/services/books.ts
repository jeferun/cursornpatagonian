import { bookDetailEndpoint, booksSearchEndpoint, booksEndpoint } from './endpoints';

export const getBooks = async (search: string) => {
  try {
    let serviceResponse;
    let response;

    if (search) {
      response = await fetch(booksSearchEndpoint(search));
    } else {
      response = await fetch(booksEndpoint);
    }
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }

    return serviceResponse;
  } catch (error) {
    console.log('Error fetching all books: ', error);
    return {
      success: false,
      data: error,
    };
  }
};

export const getBookById = async (id: number) => {
  try {
    let serviceResponse;

    const response = await fetch(bookDetailEndpoint(id));
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }

    return serviceResponse;
  } catch (error) {
    console.log(`Error fetching book with id: ${id}`, error);
    return {
      success: false,
      data: error,
    };
  }
};
