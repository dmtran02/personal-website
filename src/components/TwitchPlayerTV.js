import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';

const useStyles = makeStyles((theme) => ({
    TwitchFeed: {
        marginLeft: "15%",
        marginTop: "5%",
        alignItems: "center",
    },
}))

function TwitchPlayerTV () {

    const classes = useStyles();

    return(
        <div>
            <Container className={classes.TwitchFeed}>
                <TwitchEmbed
                    channel="shroud"
                    id="shroud"
                    theme="dark"
                    muted
                    onVideoPause={() => console.log('Video paused...')}
                />
            </Container>
        </div>
    );
}

export default TwitchPlayerTV;