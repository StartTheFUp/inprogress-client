import React, { Component } from 'react'
import Blocks from './containers/Blocks.js'
import HeaderDashboard from './components/HeaderDashboard'
import DisplayComments from './components/DisplayComments'
import { loadBlocks, loadComments, loadHeaderData } from './actions/file.js'
import { store } from './store.js'
import api from './api.js'

import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './style/App.css'

class App extends Component {
  syncDatas = () => {
    api.getProjectById(1)
      .then(loadHeaderData)

    api.getBlocks()
      .then(loadBlocks)

    api.getComments()
      .then(loadComments)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
    this.syncDatas()
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const state = store.getState()

    return (
      <div className="App">
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={11} className="main-column">
              <HeaderDashboard data={state.dataHeader} />
              <Blocks blocks={state.blocks} processedTickets={state.processedTickets} showCheck={state.showCheck} />
            </Grid.Column>
            <Grid.Column width={5} className="main-column">
              <DisplayComments comments={state.comments} threadId={state.threadId} activeElement={state.activeElement} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App
