import React, {Component} from 'react'
import { store } from './store'
import 'semantic-ui-css/semantic.min.css'
import Blocks from './components/Blocks.js'

import HeaderDashboard from './components/HeaderDashboard'

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()

    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render () {
    return (
      <div className="App">
        <HeaderDashboard />
        {this.state.blocks.map(Blocks)}
      </div>
    )
  }
}

export default App
