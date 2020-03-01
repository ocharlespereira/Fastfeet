import React from 'react';
import { Switch } from 'react-router-dom';

import DeliverymanForm from '~/pages/Deliveryman/Form';
import DeliverymanList from '~/pages/Deliveryman/List';
// import OrderForm from '~/pages/Order/Form';
import OrderList from '~/pages/Order/List';
import Problem from '~/pages/Problem';
// import RecipientForm from '~/pages/Recipient/Form';
import RecipientList from '~/pages/Recipient/List';
import SignIn from '~/pages/SignIn';
import Route from '~/routes/Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={SignIn} exact />
      {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}

      <Route path="/orders" component={OrderList} isPrivate />
      {/* <Route path="/orders/new" component={OrderForm} isPrivate exact />
      <Route path="/orders/:id/edit" component={OrderForm} isPrivate /> */}

      <Route path="/deliverymans" component={DeliverymanList} isPrivate />
      <Route path="/deliveryman/new" component={DeliverymanForm} isPrivate />
      <Route
        path="/deliveryman/:id/edit"
        component={DeliverymanForm}
        isPrivate
      />

      <Route path="/recipients" component={RecipientList} isPrivate />

      <Route path="/problems" component={Problem} isPrivate />
    </Switch>
  );
}
