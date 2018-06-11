import React, {Component} from 'react'
import { store } from './store'
import 'semantic-ui-css/semantic.min.css'
import Blocks from './containers/Blocks.js'

import HeaderDashboard from './components/HeaderDashboard'

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()

    store.subscribe(() => {
      console.log('jai change', store.getState())
      this.setState(store.getState())
    })
  }

  render () {
    return (
      <div className="App">
        <HeaderDashboard />
        <Blocks blocks={this.state.blocks}/>
      </div>
    )
  }
}

export default App
