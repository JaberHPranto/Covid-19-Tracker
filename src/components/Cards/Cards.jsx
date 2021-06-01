import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import styles from './Cards.module.css';


function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
    
    if (!confirmed) {
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Infected </Typography>
                        <Typography variant='body2' >{confirmed.value} </Typography>
                        <Typography color="textSecondary">Real Data</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19  </Typography>
                    </CardContent>
                </Grid>
                
                 <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Recovery </Typography>
                        <Typography variant='body2' >Real Data </Typography>
                        <Typography color="textSecondary">Real Data</Typography>
                        <Typography variant="body2">Number of recovery cases of COVID-19  </Typography>
                    </CardContent>
                </Grid>
                
                 <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Deaths </Typography>
                        <Typography variant='body2' >Real Data </Typography>
                        <Typography color="textSecondary">Real Data</Typography>
                        <Typography variant="body2">Number of death cases of COVID-19  </Typography>
                    </CardContent>
                </Grid> 
            </Grid>
        </div>
    )
}

export default Cards
