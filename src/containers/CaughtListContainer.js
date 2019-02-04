import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCaught } from '../actions/actions';
import { CaughtList } from '../components/CaughtList';

class CaughtListContainer extends Component {
  componentDidMount() {
    this.props.fetchCaught();
  }

  render() {
    return (
      <CaughtList
        caughtPokemonList={this.props.caughtPokemonList}
      />
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList,
  caughtPokemonList: state.caughtPokemonList
});

const mapDispatchToProps = dispatch => ({
  fetchCaught: () => dispatch(fetchCaught())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CaughtListContainer);