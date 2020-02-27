import React from 'react';
import { Switch } from 'react-router-dom';

// import Dashboard from '~/pages/Dashboard';
import DeliverymanForm from '~/pages/Deliveryman/Form';
import DeliverymanList from '~/pages/Deliveryman/List';
import Order from '~/pages/Order';
import Problem from '~/pages/Problem';
import Recipient from '~/pages/Recipient';
import SignIn from '~/pages/SignIn';
import Route from '~/routes/Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}

      <Route path="/orders" component={Order} isPrivate exact />

      <Route path="/deliverymans" component={DeliverymanList} isPrivate />
      <Route path="/deliveryman/new" component={DeliverymanForm} isPrivate />

      <Route path="/recipients" component={Recipient} isPrivate />
      <Route path="/problems" component={Problem} isPrivate />
    </Switch>
  );
}
