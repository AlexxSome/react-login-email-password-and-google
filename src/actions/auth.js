import {types} from '../types/types';
import {firebase, googleAuthProvider} from "../firebase/firebase-config";
import {finishLoading, startLoading} from "./ui";
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password, history) =>{
    return (dispatch) =>{
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((data)=>{
                dispatch(login(data.user.uid, data.user.displayName));
                dispatch(finishLoading());
                history.replace("/");
            })
            .catch(e =>{
                Swal.fire({
                    title: 'Error Login',
                    text: e.message,
                    icon: 'error'
                }).then(
                    dispatch(finishLoading())
                )


            });
    }
}

export const registerWithEmailAndPassword = (name, email, password) =>{
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user}) => {
                // await user.updatePhoneNumber( credential =>  phoneNumber);
                await user.updateProfile({displayName: name});
                dispatch(
                    login(user.uid, user.displayName, user.email)
                );
            })
            .catch(e =>{
                Swal.fire({
                    title: 'Error Register',
                    text: e.message,
                    icon: 'error'
                }).then(
                    dispatch(finishLoading())
                )
            });
    }
}

export const startGoogleLogin =() =>{
    return(dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName, user.email)
                );
            });
    }
}

export const login = (uid, displayName, email) => ({
    type: types.login,
    payload: {uid, displayName, email}
})

export const startLogout = () =>{
    return async (dispatch) =>{
        await firebase.auth().signOut();

        dispatch(logout());
    }
}

export const logout = () =>({
    type:types.logout
})


