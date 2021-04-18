import {Button, Grid, Paper} from '@material-ui/core';
import React from 'react'
import MenuAppBar from "../commons/MenuAppBar";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
        minWidth: '70%',
        borderRadius:'1.5%',
        backgroundColor: '#ddddddbb',
    },
});

export const HomeScreen = ({history}) => {
    const classes   =   useStyles();
    const state      =   useSelector(state => state);

    const handleLogout = ()=>{
        history.replace('/auth');
    }

    return (
        <>
            <MenuAppBar />
            <h2 className='text-center mt-4'>Home :</h2>
            <Grid container direction='column' alignItems='center' justify='space-between'>
                <Button color='primary' variant='contained' onClick={handleLogout}>Hola Mundo</Button>
                <Paper elevation={3} className={classes.root} xs={12} square>
                    <p>{JSON.stringify(state)}</p>
                </Paper>
                <div/>
                <div/>
            </Grid>
        </>
    )

}