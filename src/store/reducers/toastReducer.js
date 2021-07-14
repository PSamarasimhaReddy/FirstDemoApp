import { TOAST_TYPES } from '../../utils/constants';
import * as types from '../actionTypes';

const INITIAL_STATE = {
    showing:false,
    message:'',
    type:TOAST_TYPES.NORMAL,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.SHOW_TOAST :
            return{
                ...state,
                showing:true,
                message:action.payload.message,
                type:action.payload.type || TOAST_TYPES.NORMAL,
            };
        case types.HIDE_TOAST :
            return{
                ...state,
                showing:false,
            };
            default:
                return state;
    }
}