import * as types from '../actionTypes';
import { takeLatest, put } from "redux-saga/effects";
import API from '../../utils/api'
import { TOAST_TYPES } from '../../utils/constants';


export default function* registrationSaga(){
    yield takeLatest(types.REGISTRATION_START,register)
}

function* register(action) {

    yield put({
        type:types.LOADER_START,
    });

    try{
        const result = yield new API().call({
            type:'post',           
            apiEndPoints:"register",
            params:(action.payload),
        });
        yield put({
            type:types.SHOW_TOAST,
            payload:{
                message:"registration successful",
                type : TOAST_TYPES.SUCCESS,
            },
        });

        yield put({
            type:types.REGISTRATION_START_SUCCESS,
            payload:result.data,
        })
        yield put({
            type:types.LOADER_STOP,
        })
    }
    catch(error) {
        yield put({
            type:types.SHOW_TOAST,
            payload:{
                message:error.message,
                type : TOAST_TYPES.ERROR,
            },
        });

        yield put({
            type:types.REGISTRATION_START_FAIL,
            payload:error,
        })
        yield put({
            type:types.LOADER_STOP,
        })
    }
}