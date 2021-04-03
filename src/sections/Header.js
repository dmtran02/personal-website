import * as React from 'react';

import { Container, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../images/32504040.png';

const useStyles = makeStyles((theme) => ({
    HeaderContainer: {
        textAlign: "center",
        height: '100vh',
        width: 'auto',
    },
    HeaderText: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 'bold',
        letterSpacing: '-2px',
        margin: '0 auto 18px auto',
        textShadow: '0px 1px 3px rgb(0 0 0 / 80%)',
        color: 'rgb(242, 238, 235)',
    },
    BannerContainer: {
        position: 'relative',
        top: '20%',
        width: '100%',
    },
    HeaderLogo: {
        borderRadius: '50%',
        boxShadow: '0px 2px 6px rgb(0 0 0 / 80%)',
    }
}));

function Header () {

    const classes = useStyles();

    return(
        <div className={classes.HeaderContainer}>
            <Container className={classes.BannerContainer}>
                <img src={logo} className={classes.HeaderLogo}></img>
                <Typography variant="h1" className={classes.HeaderText}>Duc Tran</Typography>
                <Typography variant="h5" className={classes.HeaderText}>Software Engineer | Web Developer | Streamer | Content Creator</Typography>
            </Container>
        </div>
    );
}

export default Header;