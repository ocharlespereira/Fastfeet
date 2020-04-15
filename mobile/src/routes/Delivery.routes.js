import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ConfirmDelivery from '~/pages/ConfirmDelivery';
import Deliveries from '~/pages/Deliveries';
import DeliveryDetails from '~/pages/DeliveryDetails';
import DeliveryProblem from '~/pages/DeliveryProblem';
import Problems from '~/pages/Problems';

const Stack = createStackNavigator();

export default function DeliveryRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,
      }}
      initialRouteName="Entregas"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Entregas"
        component={Deliveries}
      />
      <Stack.Screen
        name="Detalhes"
        options={{
          title: 'Detalhes da encomenda',
        }}
        component={DeliveryDetails}
      />
      <Stack.Screen
        name="ConfirmDelivery"
        options={{
          title: 'Confirmar entrega',
        }}
        component={ConfirmDelivery}
      />
      <Stack.Screen
        name="DeliveryProblem"
        options={{
          title: 'Informar problema',
        }}
        component={DeliveryProblem}
      />
      <Stack.Screen
        name="Problems"
        options={{
          title: 'Visualizar problemas',
        }}
        component={Problems}
      />
    </Stack.Navigator>
  );
}
