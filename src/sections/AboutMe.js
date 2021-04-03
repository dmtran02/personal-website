import * as React from 'react';

import { Container, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';

import logo from '../images/32504040.png';

const useStyles = makeStyles((theme) => ({
    AboutMeDiv: {
        backgroundColor: '#262424',
        paddingTop: '12rem',
        paddingBottom: '15rem',
    },
    AboutMeContainer: {
        textAlign: 'center',
    },
    AboutMeHeaderText: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 'bold',
        letterSpacing: '3px',
        margin: '0, auto 18px auto',
        color: '#a00dbd',
        textShadow: '0px 1px 3px rgb(0 0 0 / 80%)',
    },
    AboutMeSubText: {
        color: 'white',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 'bold',
    },
    AboutMeColContainer: {
        width: '100%',
        float: 'left',
    },
    AboutMeInfoContainer: {
        marginTop: '4.2rem',
        marginRight: '-30px',
        marginLeft: '-30px',
    },
    AboutMeProfilePicture: {
        height: '12rem',
        width: '12rem',
        border: '1px solid #a00dbd',
        borderRadius: '50%',
        margin: '0.9rem 1rem 0 2rem',
        float: 'left',
    },
    AboutMeInfoText: {
        textAlign: 'left',
        paddingLeft: '13rem',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 'bold',
        lineHeight: '1.7',
        margin: '30px 0 30px 0',
        color: 'white',
    },
}));

function AboutMe () {

    const classes = useStyles();

    return(
        <div className={classes.AboutMeDiv}>
            <Container className={classes.AboutMeContainer}>
                <Typography variant='h3' className={classes.AboutMeHeaderText}>About Me</Typography>
                <Typography variant='h5' className={classes.AboutMeSubText}>Allow me to introduce myself...</Typography>
                <br/>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size='2'></MDBCol>
                        <MDBCol size='8' className={classes.AboutMeColContainer}>
                            <div className={classes.AboutMeInfoContainer}>
                                <img src={logo} className={classes.AboutMeProfilePicture}/>
                                <Typography variant='subtitle1' className={classes.AboutMeInfoText}>
                                    <br/>
                                    I am Temple University of Class 2020 Undergraduate who recently graduated with a 
                                    Bachelor of Science (BS) in Information Science & Technology. 
                                    I have a strong interest in Web Design and User Experience Design 
                                    to solve problems and challenges in optimization and updated design.
                                </Typography>
                            </div>
                        </MDBCol>
                        <MDBCol size='2'></MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Container>
        </div>
    );
}

export default AboutMe;