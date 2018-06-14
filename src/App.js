import React, { Component } from 'react'
import { store } from './store'
import Blocks from './containers/Blocks.js'
import HeaderDashboard from './components/HeaderDashboard'
import { Grid } from 'semantic-ui-react'
import DisplayComments from './components/DisplayComments'
import 'semantic-ui-css/semantic.min.css'
import './style/App.css'
import {loadBlocks, loadComments, loadHeaderData} from './actions/file.js'
import api from './api.js'

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentDidMount () {
    api.getProjectById(1)
      .then(loadHeaderData)

    api.getBlocks()
      .then(loadBlocks)

    api.getComments()
      .then(loadComments)
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
              <DisplayComments comments={this.state.comments} threadId={this.state.threadId} activeElement={this.state.activeElement} />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App
