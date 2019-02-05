import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCaught,
  LIMIT,
  incrementCaughtPageNumber
} from '../actions/actions';
import { CaughtList } from '../components/CaughtList';
import { LoadMoreButton } from '../components/LoadMoreButton';

class CaughtListContainer extends Component {
  componentDidMount() {
    this.props.fetchCaught();
  }

  loadMore() {
    this.props.incrementCaughtPageNumber();
    this.props.fetchCaught();
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <CaughtList caughtPokemonList={this.props.caughtPokemonList} />
        {LIMIT < this.props.caughtPokemonList.length ? (
          <LoadMoreButton onClick={this.loadMore.bind(this)} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  caughtPokemonList: state.caughtPokemonList,
  caughtPage: state.caughtPage
});

const mapDispatchToProps = dispatch => ({
  fetchCaught: () => dispatch(fetchCaught()),
  incrementCaughtPageNumber: () => dispatch(incrementCaughtPageNumber())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CaughtListContainer);
