import * as React from 'react';

import Homepage from '../pages/Homepage';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import TwitchTV from '../pages/TwitchTV';

import HideOnScroll from '../utils/HideOnScroll';
import BackToTop from '../utils/BackToTop';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { IconButton, List, ListItem, ListItemText, Toolbar, Fab, } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography';
import logo from '../images/32504040.png';

const navLinks = [
    {
        title: 'Home', path: '/home'
    },
    {
        title: 'About Me', path: '/about-me'
    },
    {
        title: 'Projects', path: '/projects'
    },
    {
        title: 'Twitch.tv', path: '/twitch'
    },
    {
        title: 'Blog', path: '/blog'
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
        justifyContent: 'space-between',
        marginLeft: 'auto',
    },
    linkText: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: 'white',
    },
}));

function Navigation () {

    const classes = useStyles();

    return(
        <div>
            <Router>
                <AppBar position="static" className={classes.navBar}>
                    <Toolbar variant="dense" id="back-to-top-anchor">
                        <IconButton edge="start" color="inherit" aria-label="home" disableTouchRipple="true">
                            <img src={logo} alt="Chaepanya" className={classes.logoIcon} />
                        </IconButton>
                        <Typography variant="h6">
                            Chaepanya Programming<br/>
                                <Typography variant="overline">Where Creativity and Innovation Happen</Typography>
                        </Typography>
                        <Router>
                            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                                {navLinks.map(({title, path}) => (
                                    <a href={path} key={title} className={classes.linkText}>
                                        <ListItem button disableTouchRipple="true">
                                            <ListItemText primary={title} />
                                        </ListItem>
                                    </a>
                                ))}
                            </List>
                        </Router>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/home">
                        <Homepage/>
                    </Route>
                    <Route exact path="/about-me">
                        <AboutMe/>
                    </Route>
                    <Route exact path="/projects">
                        <Projects/>
                    </Route>
                     <Route exact path="/twitch">
                        <TwitchTV/>
                    </Route>
                    <Route exact path="/blog">
                        
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Navigation;