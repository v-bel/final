import { connect } from 'react-redux';
import { CatchButton } from '../components/CatchButton';

// Props which will be provided to Presentational component with values from state
const mapStateToProps = state => ({
  pokemonList: state.pokemonList,
  caughtPokemonList: state.caughtPokemonList
});

// Container component which is connected to store
export const PokemonListContainer = connect(mapStateToProps)(CatchButton);