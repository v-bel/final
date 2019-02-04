import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <NavLink exact to='/' activeClassName='activeLink'>Pokemons</NavLink>
      <NavLink to='/caught' activeClassName='activeLink'>Caught</NavLink>
    </div>
  );
}