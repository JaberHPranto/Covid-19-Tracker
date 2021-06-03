import axios from 'axios';

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let updatedUrl = url;
    
    if (country) {
        updatedUrl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(updatedUrl)

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifiedData

    } catch (err) {
        console.log(err);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data }  = await axios.get(`${url}/daily`);
        
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate 
        }))

        return modifiedData;

    } catch (err) {
        console.log(err);
    }
}

export const fetchCountriesData = async () => {
    try {
        const { data: {countries} } = await axios.get(`${url}/countries`);
        
        const countriesData=countries.map(country => country.name)
    
        return countriesData;
        
    } catch (error) {
        console.log(error);
    }
}