import {Button, Grid, InputAdornment, TextField} from '@material-ui/core';
import './auth.css'
import React from 'react'
import { AccountCircle, LockRounded } from '@material-ui/icons';
import {useForm} from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {startGoogleLogin, startLoginEmailPassword} from "../../actions/auth";
import GoogleButton from "react-google-button";
import {Link} from "react-router-dom";

export const LoginScreen = ({history}) => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state);
    const [formValues, handleInputChange] = useForm({
        email: '',
        password:''
    });

    const {email, password} = formValues;

    const handleLogin = async (e)=>{
        e.preventDefault();
        dispatch(startLoginEmailPassword(email,password, history));
    }

    const handleGoogleLogin = ()=>{
        dispatch(startGoogleLogin());
    }

    return (
        <div >
            <Grid container className='contenedor'>
                <Grid item xs={12} sm={6}>
                    <img
                        src="https://i1.wp.com/bloggers.society19.com/wp-content/uploads/2015/11/854ebaf47acbd04c6c0c52688eaf873c.jpg?resize=550%2C851&ssl=1"
                        style={{width:"100%", height:"100vh", objectFit:"cover"}}
                        alt="brand"
                    />
                </Grid>
                <Grid container className='itemRight' item xs={12} sm={6} alignItems='center' direction='column' justify='space-between'>
                    <div />
                    <div className='containerTextlogin'>
                        <Grid container  justify='center'>
                            <img
                                src="https://thumbs.dreamstime.com/b/logotipo-del-club-de-fitness-115039443.jpg"
                                width={200}
                                alt='logo'
                            />
                        </Grid>
                        <form onSubmit={handleLogin} method="POST">
                            <TextField
                                label="Correo"
                                name="email"
                                onChange={handleInputChange}
                                margin="normal"
                                required
                                InputProps={{startAdornment:(<InputAdornment position="start"><AccountCircle  /></InputAdornment>),}}/>
                            <TextField
                                label="Contraseña"
                                name="password"
                                onChange={handleInputChange}
                                margin="normal"
                                type='password'
                                required
                                InputProps={{startAdornment:(<InputAdornment position="start"><LockRounded /> </InputAdornment>)}}
                            />
                            <div className='spaceDiv'/>

                            <Button color='primary' type="submit" size="medium" disabled={loading} variant='contained'>Ingresar</Button>
                        </form>
                       <Link to="/auth/register" className="link">Create new account</Link>

                    </div>
                    <Grid container justify='center' spacing={2}>
                        <Grid item>
                            <GoogleButton
                                type="dark"
                                onClick={ handleGoogleLogin }
                            />
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                    <div />
                </Grid>

            </Grid>
        </div>
    )
}
