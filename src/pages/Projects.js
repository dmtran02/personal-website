import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Typography, Container } from '@material-ui/core';

import ncs from '../images/Temple-logo.png';
import personalWebsite from '../images/32504040.png';
import gamerlove from '../images/gamer-love.webp';

const projects = [
    {
        title: 'Name Change System',
        description: 'A web-based system that allows students and alumni to replace the old paper system that relies on limited capacities. Technologies include ASP.NET, C#, SQL, JavaScript, jQuery, and Bootstrap.',
        picture: ncs,
    },
    {
        title: 'Personal Website',
        description: 'Website built using ReactJS and MaterialUI composing of many different components as building blocks.',
        picture: personalWebsite,
    },
    {
        title: 'Gamer Love - Online Dating Website',
        description: 'Website that allows gamers to socialize, connect, and setup dates with other gamers to find their one true love.',
        picture: gamerlove,
    },
]

const useStyles = makeStyles((theme) => ({
    ProjectsContainer: {
        marginTop: "5%",
        paddingBottom: "5%",
    },
    ProjectsTitle: {
        textAlign: "center",
        textDecoration: "underline",
    },
    ProjectsCardTitle: {
        textAlign: "center",
        textDecoration: "underline",
    },
    ProjectsCard: {
        width: "50%",
        marginLeft: "25%",
        marginTop: "5%",
    },
    ProjectsImage: {
        width: "50%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "30%",
    },
    ProjectsLine: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
}))

function Projects () {

    const classes = useStyles();

    return (
        <div>
            <Container className={classes.ProjectsContainer}>
                <Typography variant="h2" className={classes.ProjectsTitle}>Projects</Typography>
                {
                    projects.map(({title, description, picture}) => (
                        <Card variant="outlined" className={classes.ProjectsCard}>
                            <CardContent>
                                <Typography variant="h3" color="textPrimary" className={classes.ProjectsCardTitle}>{title}</Typography>
                                <br/>
                                <img src={picture} alt="image" className={classes.ProjectsImage}/>
                                <br/>
                                <hr className={classes.ProjectsLine}/>
                                <br/>
                                <Typography variant="h6">{description}</Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </Container>
        </div>
    );

}

export default Projects;