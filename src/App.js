import React, {Component} from 'react'
import { store } from './store'
import 'semantic-ui-css/semantic.min.css'
import Blocks from './components/Blocks.js'

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
      <div>
        {this.state.blocks.map(Blocks)}
      </div>
    )
  }
}

export default App
