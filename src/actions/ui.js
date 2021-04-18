import {types} from '../types/types';

export const setError = (err, input) => ({
    type: types.uiSetError,
    payload: err,
    input: input
});

export const removeError = () => ({
    type: types.uiRemoveError
});

export const startLoading = () =>({
    type:types.uiStartLoading
});

export const finishLoading = () =>({
    type:types.uiFinishLoading
});