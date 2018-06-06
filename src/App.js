import React, {Component} from 'react'
import { store } from './store'
import 'semantic-ui-css/semantic.min.css'
import DisplayBlocks from './components/DisplayBlocks'

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
        <DisplayBlocks blocks={this.state.blocks}/>
      </div>
    )
  }
}

export default App
