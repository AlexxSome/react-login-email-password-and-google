import React, {useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import {HomeScreen} from "../home/HomeScreen";
import {firebase} from '../../firebase/firebase-config'
import {useDispatch} from "react-redux";
import {login} from "../../actions/auth";
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";
import {Backdrop, CircularProgress} from "@material-ui/core";

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if(checking){
        return(
            <Backdrop  open={checking}>
                <CircularProgress color="primary" />
            </Backdrop>
        )
    }

    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={isLoggedIn}/>
                    <PrivateRoute exact path={"/"} component={HomeScreen} isAuthenticated={isLoggedIn} />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    )
}
