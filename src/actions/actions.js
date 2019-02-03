// Constants for action types
export const CATCH_POKEMON = 'CATCH_POKEMON';

export const FETCH_POKEMONS_BEGIN = 'FETCH_POKEMONS_BEGIN';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';

// Action creators
export const catchPokemon = pokemon => ({
  type: CATCH_POKEMON,
  payload: pokemon
});

export const fetchPokemonsBegin = () => ({
  type: FETCH_POKEMONS_BEGIN
});

export const fetchPokemonsSuccess = data => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: data
});

export const fetchPokemonsFailure = error => ({
  type: FETCH_POKEMONS_FAILURE,
  payload: error
});

export function fetchPokemons() {
  return dispatch => {
    dispatch(fetchPokemonsBegin());
    return fetch('http://localhost:3000/pokemons')
      .then(response => response.json())
      .then(data => {
        dispatch(fetchPokemonsSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchPokemonsFailure(error)));
  };
}
