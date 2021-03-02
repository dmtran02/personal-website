import * as React from 'react';

import Grid from '@material-ui/core/Grid';

function MaterialUI () {
    return(
        <div>
            <Grid container direction="row" justify="flex-start" alignItems="center">
                <Grid item xs={12}>
                    <h1>header</h1>
                </Grid>
                <Grid item xs={3}>
                    <h2>item</h2>
                </Grid>
                <Grid item xs={3}>
                    <h2>item</h2>
                </Grid>
            </Grid>
        </div>
    );
}

export default MaterialUI;