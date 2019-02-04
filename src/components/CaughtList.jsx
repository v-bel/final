/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Avatar } from './Avatar';
import { PokemonName } from './PokemonName';

export const CaughtList = props => {
  const caughtPokemons = props.caughtPokemonList.map(poke => (
    <div key={poke.id} className="pokemon-card d-flex flex-column">
      <Avatar id={poke.id} name={poke.name} />
      <PokemonName name={poke.name} />
    </div>
  ));
  return <div className="pokemons-wrapper">{caughtPokemons}</div>;
};
