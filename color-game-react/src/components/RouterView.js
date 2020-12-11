import React from 'react';
import { Route, Switch} from 'react-router-dom'

import Game from './Game'
import Home from './Home'

export default function RouterView() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game/:playerName/:level" component={Game} />
      </Switch>
    );
}