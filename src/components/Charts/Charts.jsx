import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import styles from './Charts.module.css';

function Charts({country,data :{confirmed,recovered,deaths}}) {
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
                        fill: true,
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

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: "People",
                        data: [confirmed.value, recovered.value, deaths.value],
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'
                        ]
                    }]
                }}
                options={{
                    legend: { display: true },
                    title: {display:true,text:`Current state in ${country}` }
                }}
            />
        ): null

    )


    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts
