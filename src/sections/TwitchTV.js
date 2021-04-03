import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TwitchPlayerTV from '../components/TwitchPlayerTV';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    TwitchContainer: {
        
    }
}))

function TwitchTV () {

    const classes = useStyles();

    return (
        <div>
            <Container className={classes.TwitchContainer}>
                <TwitchPlayerTV/>
            </Container>
        </div>
    );
}

export default TwitchPlayerTV;