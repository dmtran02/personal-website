import * as React from 'react';
import Container from '@material-ui/core/Container';

import Header from './sections/Header';
import Navigation from './sections/Navigation';
import AboutMeSection from './sections/AboutMe';
import TwitchSection from './sections/TwitchTV';
import ProjectsSection from './sections/Projects';

import Footer from './components/Footer';

import BackgroundImage from './images/mountain-range.jpg';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    pageSection: {
        border: "1px solid black",
    },
    backgroundImage: {
        background: `url(${BackgroundImage}) no-repeat top center`,
        backgroundSize: 'cover',
        height: '100%',
        width: 'auto',
    }
}));

function App () {

    const classes = useStyles();

    return(
        <div id='home'>
            <header className={classes.backgroundImage}>
                <Navigation/>
                <Header/>
            </header>
            <section id='about-me'>
                <AboutMeSection/>
            </section>
            <section id='projects'>
                <ProjectsSection/>
            </section>
            <section id='twitch'>
                <TwitchSection/>
            </section>
            <Footer/>
        </div>
    );
}

export default App;