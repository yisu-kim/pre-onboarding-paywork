import { all } from 'redux-saga/effects';
import { todoSaga } from './todo';

function* rootSaga() {
  yield all([todoSaga()]);
}

export default rootSaga;
