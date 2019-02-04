// Constants for action types
export const CATCH_POKEMON = 'CATCH_POKEMON';

export const FETCH_POKEMONS_BEGIN = 'FETCH_POKEMONS_BEGIN';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';

export const FETCH_CAUGHT_BEGIN = 'FETCH_CAUGHT_BEGIN';
export const FETCH_CAUGHT_SUCCESS = 'FETCH_CAUGHT_SUCCESS';
export const FETCH_CAUGHT_FAILURE = 'FETCH_CAUGHT_FAILURE';

export const CATCH_POKEMON_BEGIN = 'CATCH_POKEMON_BEGIN';
export const CATCH_POKEMON_SUCCESS = 'CATCH_POKEMON_SUCCESS';
export const CATCH_POKEMON_FAILURE = 'CATCH_POKEMON_FAILURE';

// Action creators
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

export const fetchCaughtBegin = () => ({
  type: FETCH_CAUGHT_BEGIN
});

export const fetchCaughtSuccess = data => ({
  type: FETCH_CAUGHT_SUCCESS,
  payload: data
});

export const fetchCaughtFailure = error => ({
  type: FETCH_CAUGHT_FAILURE,
  payload: error
});

export function fetchCaught() {
  return dispatch => {
    dispatch(fetchCaughtBegin());
    return fetch('http://localhost:3000/caught')
      .then(response => response.json())
      .then(data => {
        dispatch(fetchCaughtSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchCaughtFailure(error)));
  };
}
// ------------------------------------------------------------------------------ //
export const catchPokemonBegin = () => ({
  type: CATCH_POKEMON_BEGIN
});

export const catchPokemonSuccess = data => ({
  type: CATCH_POKEMON_SUCCESS,
  payload: data
});

export const catchPokemonFailure = error => ({
  type: CATCH_POKEMON_FAILURE,
  payload: error
});

export function catchPokemon(poke) {
  return dispatch => {
    dispatch(catchPokemonBegin());
    return fetch(`http://localhost:3000/caught`, {
      method: 'POST',
      body: JSON.stringify({
        name: poke.name,
        id: poke.id,
        date: new Date().toLocaleString()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => ({
        id: data.id,
        name: data.name,
        date: data.date
      }))
      .then(pokemon => {
        dispatch(catchPokemonSuccess(pokemon));
        return pokemon;
      })
      .catch(error => dispatch(catchPokemonFailure(error)));
  };
}
