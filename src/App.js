import React, { Component } from 'react'
import { fetchData } from './api'
import styles from './App.module.css'
import { Cards, Charts, CountryPicker } from './components'
import covidImg from './images/virus.png'
class App extends Component {
  state = {
    data: {},
    country: ''
  }
  
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchCountryData = await fetchData(country);
    this.setState({ data: fetchCountryData, country: country })
  }


  render() {
    const {data,country} = this.state
    return (
      <div className={styles.container}>
        <img src={covidImg} className={styles.covid_img} alt="Covid Virus"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={ this.handleCountryChange}/>
        <Charts data={data} country={country} />
      </div>
    )
  }
}

export default App
