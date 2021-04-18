import {types} from '../types/types';

const initialState = {
    msgError: null,
    input: null,
    loading: false
}

export const uiReducer = (state = initialState, action) =>{
     switch (action.type) {
         case types.uiSetError:
             return {
                ...state,
                 msgError: action.payload,
                 input: action.input
             }
         case types.uiRemoveError:
             return {
                 ...state,
                 msgError: null,
                 input: null
             }
         case types.uiStartLoading:
             return {
                ...state,
                 loading: true
             }
         case types.uiFinishLoading:
             return {
                 ...state,
                 loading: false
             }
         default:
             return state;
     }
}