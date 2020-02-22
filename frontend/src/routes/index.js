import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '~/pages/Dashoboard';
import Profile from '~/pages/Profile';
import SignIn from '~/pages/SignIn';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashaboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
