import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '~/pages/Dashboard';
import Deliveryman from '~/pages/Deliveryman';
import Order from '~/pages/Order';
import Problem from '~/pages/Problem';
import Recipient from '~/pages/Recipient';
import SignIn from '~/pages/SignIn';
import Route from '~/routes/Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/order" component={Order} isPrivate />
      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route path="/recipient" component={Recipient} isPrivate />
      <Route path="/problem" component={Problem} isPrivate />
    </Switch>
  );
}
