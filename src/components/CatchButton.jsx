import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const CatchButton = props => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.poke.isCaught}
      className="btn btn-primary"
    >
      {props.poke.isCaught ? 'You caught me ;)' : 'Catch'}
    </button>
  );
};
