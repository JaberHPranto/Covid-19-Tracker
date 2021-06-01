import React, { Component } from 'react'
import { fetchData } from './api'
import styles from './App.module.css'
import { Cards, Charts, CountryPicker } from './components'

class App extends Component {
  
  async componentDidMount(){
      const data = await fetchData()
      console.log(data); 
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Charts />
        <CountryPicker />
      </div>
    )
  }
}

export default App
