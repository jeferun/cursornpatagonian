import { CharacterTypes } from './../../src/reducers/book/actions';

declare global {
  interface ICharacterState {
    characters: ICharacter[];
    errorOccurred: string;
    loading: boolean;
  }

  interface GetCharacters {
    type: CharacterTypes.GET_CHARACTERS;
    payload: { value: ICharacter[] };
  }

  type CharacterActions = GetCharacters;
}
