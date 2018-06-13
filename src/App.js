import React, { Component } from 'react'
import { store } from './store'
import Blocks from './containers/Blocks.js'
import HeaderDashboard from './components/HeaderDashboard'
import { Grid } from 'semantic-ui-react'
import DisplayComments from './components/DisplayComments'
import 'semantic-ui-css/semantic.min.css'
import './style/App.css'
import {loadBlocks, loadComments, loadHeaderData} from './actions/file.js'

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  componentDidMount () {
    fetch('/blocks')
      .then(res => res.json())
      .then(blocks => loadBlocks(blocks))
    fetch('/comments')
      .then(res => res.json())
      .then(comments => loadComments(comments))
    fetch('/project/1')
      .then(res => res.json())
      .then(dataHeader => loadHeaderData(dataHeader))
  }

  render () {
    return (
      <div className="App">
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={11} className="main-column">
              <HeaderDashboard data={this.state.dataHeader} />
              <Blocks blocks={this.state.blocks} processedTickets={this.state.processedTickets} />
            </Grid.Column>
            <Grid.Column width={5} className="main-column">
              <DisplayComments />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App
