import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCovidData } from '../../api/covidApi';
import { fetchCovidRequest, fetchCovidSuccess, fetchCovidFailure } from './covidSlice';

function* fetchCovidSaga() {
  try {
    const data: any[] = yield call(fetchCovidData);
    yield put(fetchCovidSuccess(data));
  } catch (error: any) {
    yield put(fetchCovidFailure(error.message));
  }
}

export function* watchCovidSaga() {
  yield takeLatest(fetchCovidRequest.type, fetchCovidSaga);
}
