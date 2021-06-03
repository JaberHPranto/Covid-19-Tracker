import { FormControl, NativeSelect } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { fetchCountriesData } from '../../api'
import styles from './CountryPicker.module.css'

function CountryPicker({handleCountryChange}) {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const countriesApi = async () => {
            setFetchedCountries(await fetchCountriesData());
        }
        countriesApi();
    }, [setFetchedCountries])

    return (
        <>
            <FormControl className={styles.container}>
                <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)} >
                    
                    <option value="global">Global</option>
                    {fetchedCountries.map((country, idx) =>
                        <option key={idx} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </>
    )
}

export default CountryPicker
