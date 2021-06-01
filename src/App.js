import React, { Component } from 'react'
import styles from './App.module.css'
import { Cards, Charts, CountryPicker } from './components'

class App extends Component {
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
