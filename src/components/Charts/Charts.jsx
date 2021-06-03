import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import styles from './Charts.module.css';

function Charts() {
    const [dailyData,setDailyData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchApi();

    }, []);
    
    const lineChart = (
        dailyData.length ?
            (
            <Line
                data={{
                    labels:dailyData.map(daily=>(daily.date)),
                    datasets: [{
                        data: dailyData.map(daily => (daily.confirmed)),
                        label: "Infected",
                        borderColor: '#3333ff',
                        fill:true
                    },{
                        data: dailyData.map(daily => (daily.deaths)),
                        label: "Deaths",
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill:true
                    }]
                }}

            />
        ):null
    )


    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Charts
