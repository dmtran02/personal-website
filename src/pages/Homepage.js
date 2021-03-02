import { Container } from '@material-ui/core';
import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    HomeContainer: {
        margin: "5%",
    },
    HomeTitle: {
        textAlign: "center",
        textDecoration: "underline",
    },
    HomeMainContent: {
        border: "1px solid black",
    },
}));

function Homepage () {

const classes = useStyles(); 

    return(
        <div>
            <Container className={classes.HomeContainer}>
                <Typography variant="h2" className={classes.HomeTitle}>Welcome to Chaepnaya Programming</Typography>
                <br/>
            </Container>
        </div>
    );
}

export default Homepage;