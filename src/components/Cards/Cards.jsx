import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import cx from 'classnames';
import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
    
    if (!confirmed) {
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Infected </Typography>
                        <Typography variant='body2' >
                            <CountUp start={0} end={confirmed.value} duration={3} separator=","/> 
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19  </Typography>
                    </CardContent>
                </Grid>
                
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Recovery </Typography>
                        <Typography variant='body2' >
                            <CountUp start={0} end={recovered.value} duration={3} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recover cases of COVID-19  </Typography>
                    </CardContent>
                </Grid>
                
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Deaths </Typography>
                        <Typography variant='body2' >
                            <CountUp start={0} end={deaths.value} duration={3} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of death cases of COVID-19  </Typography>
                    </CardContent>
                </Grid> 
            </Grid>
        </div>
    )
}

export default Cards
