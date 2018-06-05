import React, {Component} from 'react'
import { store } from './store'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {

  constructor() {
    super()
    this.state = store.getState()

    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render () {
    if(this.state.blocs[0])
    return (
      <div>
      {this.state.blocs[0]._id}
      </div>
    )
    else 
    return (
      <div>Loading</div>
    )
    
  }
}

export default App
