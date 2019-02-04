import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons, fetchCaught, catchPokemon } from '../actions/actions';
import { PokemonList } from '../components/PokemonList';

class PokemonListContainer extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
    this.props.fetchCaught();
  }

  render() {
    return <PokemonList pokemonList={this.props.pokemonList} />;
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList,
  caughtPokemonList: state.caughtPokemonList
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchPokemons()),
  fetchCaught: () => dispatch(fetchCaught())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonListContainer);
