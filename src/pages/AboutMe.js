import * as React from 'react';

import { Container, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) => ({
    AboutMeContainer: {
        textAlign: "center",
        marginTop: "5%",
    },
    AboutMeText: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 'bold',
    },
}));

function AboutMe () {

    const classes = useStyles();

    return(
        <div className={classes.AboutMeContainer}>
            <Typography variant="h1" className={classes.AboutMeText}>Duc Tran</Typography>
            <Typography variant="h5">Software Engineer | Web Developer | Streamer | Content Creator</Typography>
            <Container>
                    
            </Container>
        </div>
    );
}

export default AboutMe;