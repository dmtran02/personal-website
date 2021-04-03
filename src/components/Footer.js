import * as React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerContaienr: {
        width: "auto",
        bottom: "0",
        left: "0",
        marginTop: "1rem",
        padding: "1rem",
        border: "1px solid black",
        backgroundColor: "#142238",
    },
    footerText : {
        color: "white",
        textAlign: "right",
        marginRight: "5rem",
    },
}))

function Footer () {

    const classes = useStyles();

    return(
        <div className={classes.footerContaienr}>
            <Typography variant="h6" className={classes.footerText}>© 2021 Chaepanya Programming</Typography>
        </div>
    );
}

export default Footer;