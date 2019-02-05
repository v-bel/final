// fetch and promise for ie11
import 'whatwg-fetch';
import 'promise-polyfill/src/polyfill';

export const LIMIT = 40;

// fetch all pokemons
export const FETCH_POKEMONS_BEGIN = 'FETCH_POKEMONS_BEGIN';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';

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
  return (dispatch, getState) => {
    dispatch(fetchPokemonsBegin());
    const page = getState().page;
    return fetch(`http://localhost:3000/pokemons?_page=${page}&_limit=${LIMIT}`)
      .then(response => response.json())
      .then(data => {
        dispatch(fetchPokemonsSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchPokemonsFailure(error)));
  };
}

// fetch caught pokemons
export const FETCH_CAUGHT_BEGIN = 'FETCH_CAUGHT_BEGIN';
export const FETCH_CAUGHT_SUCCESS = 'FETCH_CAUGHT_SUCCESS';
export const FETCH_CAUGHT_FAILURE = 'FETCH_CAUGHT_FAILURE';

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
    return fetch('http://localhost:3000/pokemons')
      .then(response => response.json())
      .then(data => data.filter(poke => poke.isCaught === true))
      .then(filteredData => {
        dispatch(fetchCaughtSuccess(filteredData));
        return filteredData;
      })
      .catch(error => dispatch(fetchCaughtFailure(error)));
  };
}

// catch pokemon
export const CATCH_POKEMON_BEGIN = 'CATCH_POKEMON_BEGIN';
export const CATCH_POKEMON_SUCCESS = 'CATCH_POKEMON_SUCCESS';
export const CATCH_POKEMON_FAILURE = 'CATCH_POKEMON_FAILURE';

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
    return fetch(`http://localhost:3000/pokemons/${poke.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: poke.name,
        id: poke.id,
        isCaught: true,
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

// change page number
export const INCREMENT_PAGE_NUMBER = 'INCREMENT_PAGE_NUMBER';
export const INCREMENT_CAUGHT_PAGE_NUMBER = 'INCREMENT_CAUGHT_PAGE_NUMBER';

export const incrementPageNumber = () => ({
  type: INCREMENT_PAGE_NUMBER
});

export const incrementCaughtPageNumber = () => ({
  type: INCREMENT_CAUGHT_PAGE_NUMBER
});

// // fetch and promise for ie11
// import 'whatwg-fetch';
// import 'promise-polyfill/src/polyfill';

// // fetch all pokemons
// export const FETCH_POKEMONS_BEGIN = 'FETCH_POKEMONS_BEGIN';
// export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
// export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';

// export const fetchPokemonsBegin = () => ({
//   type: FETCH_POKEMONS_BEGIN
// });

// export const fetchPokemonsSuccess = data => ({
//   type: FETCH_POKEMONS_SUCCESS,
//   payload: data
// });

// export const fetchPokemonsFailure = error => ({
//   type: FETCH_POKEMONS_FAILURE,
//   payload: error
// });

// export function fetchPokemons() {
//   return dispatch => {
//     dispatch(fetchPokemonsBegin());
//     return fetch('http://localhost:3000/pokemons')
//       .then(response => response.json())
//       .then(data => {
//         dispatch(fetchPokemonsSuccess(data));
//         return data;
//       })
//       .catch(error => dispatch(fetchPokemonsFailure(error)));
//   };
// }

// // fetch caught pokemons
// export const FETCH_CAUGHT_BEGIN = 'FETCH_CAUGHT_BEGIN';
// export const FETCH_CAUGHT_SUCCESS = 'FETCH_CAUGHT_SUCCESS';
// export const FETCH_CAUGHT_FAILURE = 'FETCH_CAUGHT_FAILURE';

// export const fetchCaughtBegin = () => ({
//   type: FETCH_CAUGHT_BEGIN
// });

// export const fetchCaughtSuccess = data => ({
//   type: FETCH_CAUGHT_SUCCESS,
//   payload: data
// });

// export const fetchCaughtFailure = error => ({
//   type: FETCH_CAUGHT_FAILURE,
//   payload: error
// });

// export function fetchCaught() {
//   return dispatch => {
//     dispatch(fetchCaughtBegin());
//     return fetch('http://localhost:3000/pokemons')
//       .then(response => response.json())
//       .then(data => data.filter(poke => poke.isCaught === true))
//       .then(filteredData => {
//         dispatch(fetchCaughtSuccess(filteredData));
//         return filteredData;
//       })
//       .catch(error => dispatch(fetchCaughtFailure(error)));
//   };
// }

// // catch pokemon
// export const CATCH_POKEMON_BEGIN = 'CATCH_POKEMON_BEGIN';
// export const CATCH_POKEMON_SUCCESS = 'CATCH_POKEMON_SUCCESS';
// export const CATCH_POKEMON_FAILURE = 'CATCH_POKEMON_FAILURE';

// export const catchPokemonBegin = () => ({
//   type: CATCH_POKEMON_BEGIN
// });

// export const catchPokemonSuccess = data => ({
//   type: CATCH_POKEMON_SUCCESS,
//   payload: data
// });

// export const catchPokemonFailure = error => ({
//   type: CATCH_POKEMON_FAILURE,
//   payload: error
// });

// export function catchPokemon(poke) {
//   return dispatch => {
//     dispatch(catchPokemonBegin());
//     return fetch(`http://localhost:3000/pokemons/${poke.id}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         name: poke.name,
//         id: poke.id,
//         isCaught: true,
//         date: new Date().toLocaleString()
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => response.json())
//       .then(data => ({
//         id: data.id,
//         name: data.name,
//         date: data.date
//       }))
//       .then(pokemon => {
//         dispatch(catchPokemonSuccess(pokemon));
//         return pokemon;
//       })
//       .catch(error => dispatch(catchPokemonFailure(error)));
//   };
// }
