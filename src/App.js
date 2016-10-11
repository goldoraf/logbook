import React, { Component } from 'react'
import Remarkable from 'remarkable'

import { LinearLayout } from 'react-bosonic/lib'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {markdown: ""}
    this.md = new Remarkable()
    this.handleChange = this.handleChange.bind(this)
  }

  rawMarkup() {
    return { __html: this.md.render(this.state.markdown) }
  }

  handleChange(event) {
    this.setState({markdown: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Logbook</h1>
        </div>
        <div className="App-body">
          <LinearLayout className="App-content" horizontal={true}>
            <div className="expand" dangerouslySetInnerHTML={this.rawMarkup()} />
            <textarea className="expand" value={this.state.markdown} onChange={this.handleChange}/>
          </LinearLayout>
        </div>
      </div>
    )
  }
}

export default App
