import { Alert } from 'react-native';

import { parseISO, format } from 'date-fns';
import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `/delivery/${id}/orders`);

    yield put(
      signInSuccess(id, {
        name: response.data.name,
        email: response.data.email,
        created_at: format(parseISO(response.data.created_at), 'dd/MM/yyyy'),
        avatar: response.data.avatar,
      })
    );
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'erro no login, verifique seus dados.'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
