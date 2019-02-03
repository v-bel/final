import {
  CATCH_POKEMON,
  FETCH_POKEMONS_BEGIN,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE
} from '../actions/actions';

// Crete initial state for reducer
const initState = {
  pokemonList: [],
  caughtPokemonList: [],
  isFetching: false
};

// eslint-disable-next-line import/prefer-default-export
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case CATCH_POKEMON:
      return {
        ...state,
        caughtPokemonList: [...state.caughtPokemonList, action.payload]
      };
    case FETCH_POKEMONS_BEGIN:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokemonList: action.payload
      };
    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        pokemonList: ['error']
      };
    default:
      return state;
  }
};
