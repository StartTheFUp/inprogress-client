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
  
    return (
      <div>
      {this.state.blocs.map(bloc => `${bloc._id}---`)}
      </div>
    )
  
    
  }
}

export default App
