import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';

const useStyles = makeStyles((theme) => ({
    TwitchFeed: {
           
    },
    TwitchLivePlayer: {
        display: "block",
        margin: "0 auto",
    }
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
                    className={classes.TwitchLivePlayer}
                />
            </Container>
        </div>
    );
}

export default TwitchPlayerTV;