import React, { Component } from 'react'
import Remarkable from 'remarkable'
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
        <div dangerouslySetInnerHTML={this.rawMarkup()} />
        <textarea value={this.state.markdown} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default App
