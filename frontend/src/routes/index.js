import React from 'react';
import { Switch } from 'react-router-dom';

// import Dashboard from '~/pages/Dashboard';
// import DeliverymanForm from '~/pages/Deliveryman/Form';
import DeliverymanForm from '~/pages/Deliveryman/Form/Cad';
import DeliverymanFormEdit from '~/pages/Deliveryman/Form/Edit';
import DeliverymanList from '~/pages/Deliveryman/List';
import Order from '~/pages/Order';
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

      <Route path="/orders" component={Order} isPrivate exact />

      <Route path="/deliverymans" component={DeliverymanList} isPrivate />
      <Route path="/deliveryman/new" component={DeliverymanForm} isPrivate />
      <Route
        path="/deliveryman/:id/edit"
        component={DeliverymanFormEdit}
        isPrivate
      />

      <Route path="/recipients" component={RecipientList} isPrivate />
      {/* <Route path="/recipient/new" component={RecipientForm} isPrivate /> */}

      <Route path="/problems" component={Problem} isPrivate />
    </Switch>
  );
}
