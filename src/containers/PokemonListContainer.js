import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons, LIMIT, incrementPageNumber } from '../actions/actions';
import { PokemonList } from '../components/PokemonList';
import { LoadMoreButton } from '../components/LoadMoreButton';

class PokemonListContainer extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  loadMore() {
    this.props.incrementPageNumber();
    this.props.fetchPokemons();
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <PokemonList pokemonList={this.props.pokemonList} />
        {this.props.pokemonList.length >= LIMIT ? (
          <LoadMoreButton onClick={this.loadMore.bind(this)} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemonList: state.pokemonList,
  page: state.page
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(fetchPokemons()),
  incrementPageNumber: () => dispatch(incrementPageNumber())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonListContainer);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchPokemons, fetchCaught, catchPokemon } from '../actions/actions';
// import { PokemonList } from '../components/PokemonList';

// class PokemonListContainer extends Component {
//   componentDidMount() {
//     this.props.fetchPokemons();
//     this.props.fetchCaught();
//   }

//   render() {
//     return <PokemonList pokemonList={this.props.pokemonList} />;
//   }
// }

// const mapStateToProps = state => ({
//   pokemonList: state.pokemonList,
//   caughtPokemonList: state.caughtPokemonList
// });

// const mapDispatchToProps = dispatch => ({
//   fetchPokemons: () => dispatch(fetchPokemons()),
//   fetchCaught: () => dispatch(fetchCaught())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PokemonListContainer);
