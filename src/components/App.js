import React from 'react'

import Header from './Header'
import AddEntry from '../containers/AddEntry'
import MainEntryList from '../containers/MainEntryList'

import './App.css'

const App = () => (
  <div className="App">
    <Header/>
    <div className="App-body">
      <AddEntry/>
      <MainEntryList/>
    </div>
  </div>
)

export default App
