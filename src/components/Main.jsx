import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PokemonListContainer from "../containers/PokemonListContainer";
import CaughtListContainer from "../containers/CaughtListContainer";

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={PokemonListContainer} />
      <Route path="/caught" component={CaughtListContainer} />
    </Switch>
  );
};
