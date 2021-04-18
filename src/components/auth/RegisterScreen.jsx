import React from 'react';
import { Grid } from "@material-ui/core";
import {Link} from "react-router-dom";
import {FormSignup} from "./forms/FormSignup";

export const RegisterScreen = () => {
    return (
    <div >
        <Grid container className='contenedor'>
            <Grid item xs={12} sm={6}>
                <img
                    src="https://www.mensjournal.com/wp-content/uploads/mf/the_15_most_important_exercises_for_men_main.jpg?quality=86&strip=all"
                    style={{width:"100%", height:"100vh", objectFit:"cover"}}
                    alt="brand"
                />
            </Grid>
            <Grid container className='itemRight' item xs={12} sm={6} alignItems='center' direction='column' justify='space-between'>
                <div />
                <div className='containerTextRegister'>
                    <h2 className="tittle">Register new user</h2>

                    <FormSignup />

                    <Link to="/auth/login" className="link">Already registered?</Link>
                </div>
                <div />
            </Grid>

        </Grid>
    </div>
    )
}
