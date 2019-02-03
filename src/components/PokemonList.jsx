/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react';
import { CatchButton } from './CatchButton';

export const PokemonList = props => {
  const pokemons = props.pokemonList.map(poke => (
    <div key={poke.id}>
      <p>{poke.name}</p>
      <CatchButton />
    </div>
  ));
  return <div className="pokemons-wrapper">{pokemons}</div>;
};

// export class PokemonList extends Component {
//   componentDidMount() {
//     this.props.fetchPokemons();
//   }

//   render() {
//     const pokemons = this.props.pokemonList.map(poke => (
//       <div key={poke.id}>
//         <Avatar />
//         <p>{poke.name}</p>
//         <CatchButton />
//       </div>
//     ));
//     return <div className="pokemons-wrapper">{pokemons}</div>;
//   }
// }

