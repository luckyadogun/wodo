import React, { Component } from 'react'
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_logged_in: false,
      toggle_dark_mode: false,
    }
  }

  render () {
    return (
      <div className="">
        <Home />
      </div>
    )
  }
}

export default App;
