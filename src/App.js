import React, {Component} from 'react'
import { store } from './store'
import 'semantic-ui-css/semantic.min.css'
import Blocs from './components/Blocs.js'

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
        {this.state.blocs.map(Blocs)}
      </div>
    )
  }
}

export default App
