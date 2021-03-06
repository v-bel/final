import React from 'react';
import { Avatar } from './Avatar';
import { PokemonName } from './PokemonName';
import { CatchButton } from './CatchButton';

export const PokemonCard = props => {
  return (
    <div className="pokemon-card card-shadow card mt-3 mx-1 d-flex flex-column">
      <Avatar id={props.poke.id} name={props.poke.name} />
      <PokemonName name={props.poke.name} />
      <CatchButton poke={props.poke} onClick={props.onClick} />
    </div>
  );
};
