import {all} from 'redux-saga/effects';
import common from './common/sagas';
import login from './login/sagas';

export default function* rootSaga() {
  return yield all([
    common,
    login,
    // adicione mais sagas
  ]);
}
