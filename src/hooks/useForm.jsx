import {useState} from 'react';

export const useForm = ( callback, validate, initialState = {} ) => {

    const [values, setValues]               = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange, reset ];
}