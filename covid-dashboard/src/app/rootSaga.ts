import { all } from 'redux-saga/effects';
import { watchCovidSaga } from '../features/covid/covidSaga';

export default function* rootSaga() {
  yield all([
    watchCovidSaga(),
  ]);
}
