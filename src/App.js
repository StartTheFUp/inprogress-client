import React, { Component } from 'react'
import BlocksContainer from './containers/BlocksContainer.js'
import ProjectHeader from './components/ProjectHeader'
import DisplayComments from './containers/DisplayComments'
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

    api.getComments()
      .then(loadComments)

    api.getBlocks()
      .then(loadBlocks)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
    this.syncDatas()

    setInterval(() => api.updateBlocks(store.getState().blocks), 5 * 1000)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
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
                addSectionActive={state.addSectionActive}
                activeElement={state.activeElement}
                comments={state.comments} />
            </Grid.Column>
            <Grid.Column width={5} className="main-column">
              {state.activeElement === ''
                ? null
                : <DisplayComments
                  comments={state.comments}
                  threadId={state.threadId}
                  activeElement={state.activeElement}
                  addCommentActive={state.addCommentActive} />
              }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App
