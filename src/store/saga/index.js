import { fork,all } from "redux-saga/effects";
import loginSaga from "./loginSaga";
import registrationSaga from "./registrationSaga";


export default function* rootSaga(){
    yield all ([fork(loginSaga)]);
    yield all ([fork(registrationSaga)]);
}