import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions/actions';
import { PokemonList } from '../components/PokemonList';

class PokemonListContainer extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  render() {
    return <PokemonList />;
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList,
  caughtPokemonList: state.caughtPokemonList
});

export default connect(mapStateToProps)(PokemonList);

// const mapStateToProps = state => ({
//   pokemonList: state.pokemonList,
//   caughtPokemonList: state.caughtPokemonList
// });

// const mapDispatchToProps = dispatch => ({
//   fetchPokemons: () => dispatch(fetchPokemons())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PokemonList);
