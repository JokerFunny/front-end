import {all, takeEvery, put, call} from 'redux-saga/effects'
import actions from './actions'
import { authenticationService } from '../../Auth/_services';

export function* LOAD_CURRENT_ACCOUNT() {
  const response = yield call(() => authenticationService.currentUserValue);
  if(response) {
    const {id, firstName, lastName, role, username} = response;
    yield put({
      type: 'user/SET_STATE',
      payload: {
        id,
        firstName,
        lastName,
        role,
        username,
        authorized: true,
      },
    })
  } else {
    // reset state
    yield all([
      RESET_STATE_ACCOUNT()
    ])
  }
}

export function* LOGOUT() {
  //yield call(logout);
  yield all([
    RESET_STATE_ACCOUNT()
  ])
}

function* RESET_STATE_ACCOUNT() {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id : '',
      firstName : '',
      lastName: '',
      role : '',
      username : '',
      authorized: false
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}
