import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';

import { makeStyles } from '@material-ui/core/styles';

const navLinks = [
    {
        title: 'Home', path: '#home',
    },
    {
        title: 'About Me', path: '#about-me',
    },
    {
        title: 'Projects', path: '#projects',
    },
    {
        title: 'Twitch.tv', path: '#twitch',
    },
    {
        title: 'Blog', path: '#blog',
    },
]

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: "#142238",
    },
    menuIcon: {
        color: "white",
        border: "1px solid black",
        padding: "5px",
        borderRadius: "30%",
    },
    logoIcon: {
        width: "100px",
        height: "100px",
        borderRadius: "50%;",
        border: "3px solid black",
    },
    navDisplayFlex: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
    },
    linkText: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: 'black',
        fontFamily: 'Open Sans, sans-serif',
        margin: 'auto',
        cursor: 'pointer',
    },
}));

function Navigation () {

    const classes = useStyles();

    return(
        <div>
            <Router>
                <Container>
                    <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                        {navLinks.map(({title, path}) => (
                            <NavHashLink to={path} smooth className={classes.linkText}>{title}</NavHashLink>
                        ))}
                    </List>
                </Container>
            </Router>
        </div>
    );
}

export default Navigation;