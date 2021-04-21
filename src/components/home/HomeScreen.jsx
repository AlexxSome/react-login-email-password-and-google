import {Button, Grid, Paper} from '@material-ui/core';
import React from 'react'
import MenuAppBar from "../commons/MenuAppBar";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Swal from 'sweetalert2';

const useStyles = makeStyles({
    root:{
        minWidth: '70%',
        borderRadius:'1.5%',
        backgroundColor: '#ddddddbb',
        marginTop: '1%'
    },
    button: {
        marginTop: '1%',
    }
});

export const HomeScreen = ({history}) => {
    const classes   =   useStyles();
    const state      =   useSelector(state => state);

    const handleHola = () => {
        Swal.fire({
            title: 'Hello world!',
            text: 'Hello world alert!',
            icon: 'info',
            confirmButtonText: 'OK'
        })
    }

    return (
        <>
            <MenuAppBar />
            <Grid container direction='column' alignItems='center' justify='space-between'>
                <Button className={classes.button} color='primary' variant='contained' onClick={handleHola}>Hello World</Button>
                <Paper elevation={3} className={classes.root} xs={12} square>
                    <h3> Bienvenido : {state.auth.name} </h3>
                </Paper>
                <div/>
                <div/>
            </Grid>
        </>
    )

}