import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const LoadMoreButton = props => {
  return (
    <button onClick={props.onClick} className="btn btn-light btn-lg my-3 mx-2">
      Load more
    </button>
  );
};
