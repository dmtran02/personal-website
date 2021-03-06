import { Container } from '@material-ui/core';
import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    HomeContainer: {

    },
    HomeTitle: {
        textAlign: "center",
        textDecoration: "underline",
    },
    HomeMainContent: {
        border: "1px solid black",
    },
    UnderConstructionContainer: {
        
    },
    UnderConstruction: {
        textAlign: "center",
    }
}));

function Homepage () {

const classes = useStyles(); 

    return(
        <div>
            <div>
                <br/>
            </div>
            <div>
                <Container className={classes.HomeContainer}>
                    <Typography variant="h2" className={classes.HomeTitle}>Welcome to Chaepnaya Programming</Typography>
                </Container>
                <br/>
                <Container className={classes.UnderConstructionContainer}>
                    <Typography variant="h3" className={classes.UnderConstruction}>Excuse the appearance of this website as it is still under construction!</Typography>
                </Container>
            </div>
        </div>
    );
}

export default Homepage;