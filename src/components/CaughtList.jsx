/* eslint-disable import/prefer-default-export */
import React from 'react';
import PokemonCardContainer from '../containers/PokemonCardContainer';

export const CaughtList = props => {
  const caughtPokemons = props.caughtPokemonList.map(poke => (
    <PokemonCardContainer poke={poke} />
  ));
  return <div className="pokemons-wrapper d-flex flex-wrap justify-content-around">{caughtPokemons}</div>;
};
