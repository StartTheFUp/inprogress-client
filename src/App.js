import React, { Component } from 'react'
import BlocksContainer from './containers/BlocksContainer.js'
import ProjectHeader from './components/ProjectHeader'
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

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
    this.syncDatas()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const state = store.getState()
    console.log('block app', state.addSectionActive)
    return (
      <div className="App">
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={11} className="main-column">
              <ProjectHeader data={state.dataHeader} />
              <BlocksContainer blocks={state.blocks}
                shouldDisplayArchivedTickets={state.shouldDisplayArchivedTickets}
                showCheck={state.showCheck}
                addSectionActive={state.addSectionActive}/>
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
