/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Avatar } from './Avatar';
import { PokemonName } from './PokemonName';
import { CatchButton } from './CatchButton';
import PokemonCardContainer from '../containers/PokemonCardContainer';
import { PokemonCard } from './PokemonCard';

export const PokemonList = props => {
  const pokemons = props.pokemonList.map(poke => (
    <PokemonCardContainer poke={poke} />
  ));
  return <div className="pokemons-wrapper d-flex flex-wrap">{pokemons}</div>;
};
