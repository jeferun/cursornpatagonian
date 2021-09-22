import { getAllCharacters } from './../../services/characters';

// enum types auctionsu
export enum CharacterTypes {
  SET_CHARACTERS = 'GET_CHARACTERS',
  SET_ERROR = 'ERROR',
  SET_LOADING = 'LOADING', // p*
}

// action dispatch
export const setCharacters = (value: ICharacter) => ({
  type: CharacterTypes.SET_CHARACTERS,
  payload: { value },
});

export const setErrorOccurred = (value: string) => ({
  type: CharacterTypes.SET_ERROR,
  payload: { value },
});

export const setLoading = (value: boolean) => ({
  type: CharacterTypes.SET_LOADING,
  payload: { value },
});

export const getCharacters = () => async (dispatch: any, _: any) => {
  // p*
  dispatch(setLoading(true));
  try {
    const { success, data } = await getAllCharacters();
    const error = "An unknown error occurred :'(";
    if (success) {
      dispatch(setCharacters(data));
    } else {
      dispatch(setErrorOccurred(error));
    }
  } catch (error: any) {
    dispatch(setErrorOccurred(error));
  } finally {
    dispatch(setLoading(false));
  }
};
