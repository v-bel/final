/* eslint-disable import/prefer-default-export */
import React from 'react';
import PokemonCardContainer from '../containers/PokemonCardContainer';

export const PokemonList = props => {
  const pokemons = props.pokemonList.map(poke => (
    <PokemonCardContainer key={poke.id} poke={poke} />
  ));
  return <div className="pokemons-wrapper d-flex flex-wrap justify-content-around">{pokemons}</div>;
};
