import 'react-native-gesture-handler';
import React from 'react';
import { StatatusBar } from 'react-native'
import { Provider } from 'react-redux'

import { NavigationNativeContainer } from '@react-navigation/native'
import { PersistGate } from 'redux-persist/es/integration/react'

import '~/config/ReactotronConfig'

import { store, persistor } from '~/store';

import App from './App';

export default function Index() {
  return (
    <NavigationNativeContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatatusBar backgroundColor="#7D40E7" barStyle="light-content" />
          <App />
        </PersistGate>
      </Provider>
    </NavigationNativeContainer>
  );
}
