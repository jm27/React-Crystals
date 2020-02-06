import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CrystalImage from './Crystal'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>Title('xs=12 sm=9')</Paper>
                </Grid>
                <Grid container
                   container
                   direction="column"
                   justify="flex-start"
                   alignItems="flex-start"
                 item xs={12} sm={12}>
                    <Paper className={classes.paper}>Pick me!(xs=6 sm=3) Instructions
You will be given a random number at the start of the game.

There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.

You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.

The value of each crystal is hidden from you until you click on it.

Each time when the game starts. the game will change the values of each crystal.</Paper>
                </Grid>
                <Grid item xs={12} sm={12}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Paper className={classes.paper}>Score ('xs=12 sm=12')</Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>xs=6 sm=4</Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}><CrystalImage src='https://cdn.shopify.com/s/files/1/0912/7764/articles/blue-crystals-vector-clipart_ed1ae347-444b-4261-9001-1137ae396bab_2048x.png?v=1563439532'></CrystalImage></Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>xs=6 sm=4</Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>xs=6 sm=4</Paper>
                </Grid>               
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>xs=6 sm=4</Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>xs=6 sm=4</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
