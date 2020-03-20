import { userSelect } from 'react-redux';

import createRouter from '~/routes'

export default function App() {
  const signed = userSelect(state => state.auth.signed);

  return createRouter(signed);
}
