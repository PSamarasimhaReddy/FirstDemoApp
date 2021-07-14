import * as types from '../actionTypes';

const INITIAL_STATE = {
    loading : false,
    user : null,
    error : null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.REGISTRATION_START :
            return{
                ...state,
                ...INITIAL_STATE,
                loading:true,
            };

        case types.REGISTRATION_START_SUCCESS :
            return{
                ...state,
                ...INITIAL_STATE,
                user:action.payload,
            };

        case types.REGISTRATION_START_FAIL :
            return{
                ...state,
                ...INITIAL_STATE,
                error:action.payload,
            };
            default:
                return state;
    }
}