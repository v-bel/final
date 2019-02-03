import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import PokemonListContainer from './containers/PokemonListContainer';
import './style.css';

export const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <PokemonListContainer />
  </Provider>,
  document.getElementById('root')
);
