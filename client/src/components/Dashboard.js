import React from 'react'
import AddToPhotosRoundedIcon from '@material-ui/icons/AddToPhotosRounded';
import { Grid, IconButton, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <Grid 
            container 
            direction="column"
            justify="space-between" 
            alignItems="center"
        >
            <Grid container item sm direction="row" justify="space-between">
                <Typography variant="h4">Campaign Dashboard</Typography>
                <Link to="/campaign/new">
                    <IconButton>
                        <AddToPhotosRoundedIcon color="secondary" fontSize="large" />
                    </IconButton>
                </Link>
            </Grid>
            <h2>Content</h2>
        </Grid>
    )
}
