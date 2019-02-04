import {
  FETCH_POKEMONS_BEGIN,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  CATCH_POKEMON_BEGIN,
  CATCH_POKEMON_SUCCESS,
  CATCH_POKEMON_FAILURE,
  FETCH_CAUGHT_BEGIN,
  FETCH_CAUGHT_SUCCESS,
  FETCH_CAUGHT_FAILURE
} from '../actions/actions';

// Crete initial state for reducer
const initState = {
  pokemonList: [],
  caughtPokemonList: []
};

// eslint-disable-next-line import/prefer-default-export
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_BEGIN:
      return {
        ...state
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemonList: action.payload
      };
    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        pokemonList: ['error']
      };
    case FETCH_CAUGHT_BEGIN:
      return {
        ...state
      };
    case FETCH_CAUGHT_SUCCESS:
      return {
        ...state,
        caughtPokemonList: action.payload
      };
    case FETCH_CAUGHT_FAILURE:
      return {
        ...state,
        caughtPokemonList: ['error']
      };
    case CATCH_POKEMON_BEGIN:
      return {
        ...state
      };
    case CATCH_POKEMON_SUCCESS:
      return {
        ...state,
        caughtPokemonList: [...state.caughtPokemonList, action.payload]
      };
    case CATCH_POKEMON_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};
