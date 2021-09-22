import { CharacterTypes } from './actions';

const initialState: ICharacterState = {
  characters: [],
  errorOccurred: '',
  loading: false,
};

function CharacterReducer(state = initialState, action: CharacterActions) {
  switch (action.type) {
    case CharacterTypes.SET_CHARACTERS: {
      const { value } = action.payload;
      return {
        ...state,
        characters: value,
      };
    }
    case CharacterTypes.SET_ERROR: {
      const { value } = action.payload;
      return {
        ...state,
        errorOccurred: value,
      };
    }
    case CharacterTypes.SET_LOADING: {
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

export default CharacterReducer;
