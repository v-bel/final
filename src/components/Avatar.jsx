import React from 'react';

export const Avatar = props => {
  const src = `https://raw.githubusercontent.com/epam-js-dec-2018/final-project/master/pokemons/${
    props.id
  }.png`;
  const altText = `${props.name}`;
  return <img src={src} className="pokemon-avatar card-img-top" alt={altText} onError={(e)=>{e.target.onerror = null; e.target.src="src/assets/default.png"}} />;
};
