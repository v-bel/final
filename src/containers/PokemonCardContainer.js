import React, { Component } from 'react';
import { connect } from 'react-redux';
import { catchPokemon } from '../actions/actions';
import { PokemonCard } from '../components/PokemonCard';

class PokemonCardContainer extends Component {
  handleClick(poke, e) {
    e.preventDefault();
    this.props.catchPokemon(poke);
    e.target.setAttribute('disabled', true);
    e.target.textContent = 'You caught me ;)';
  }

  render() {
    return (
      <PokemonCard
        poke={this.props.poke}
        onClick={this.handleClick.bind(this, this.props.poke)}
      />
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList,
  caughtPokemonList: state.caughtPokemonList
});

const mapDispatchToProps = dispatch => ({
  catchPokemon: poke => dispatch(catchPokemon(poke))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonCardContainer);
