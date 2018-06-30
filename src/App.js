import React, { Component } from 'react'
import HomePage from './containers/HomePage.js'
import Dashboard from './containers/Dashboard.js'
import { Router } from '@reach/router'
import { loadBlocks, loadComments } from './actions/file.js'
import { store } from './store.js'
import api from './api.js'

import 'semantic-ui-css/semantic.min.css'
import './style/App.css'

class App extends Component {
  syncDatas = () => {
    /* api.getProjectById('projetId_65565')
      .then(loadHeaderData) */

    api.getComments()
      .then(loadComments)

    api.getBlocks()
      .then(loadBlocks)
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
    this.syncDatas()
    setInterval(() => api.updateBlocks(store.getState().blocks), 5000 * 1000)
    setInterval(() => api.updateComments(store.getState().comments), 5000 * 1000)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const state = store.getState()
    console.log('block app local storage!!!!', localStorage.getItem("userName"))

    return (
      <div className="App">
        <Router>
          <HomePage path='/' projectsAdmin={state.projectsAdmin}/>
          <Dashboard path='project/:projectId'
            blocks={state.blocks}
            shouldDisplayArchivedTickets={state.shouldDisplayArchivedTickets}
            showCheck={state.showCheck}
            addSectionActive={state.addSectionActive}
            activeElement={state.activeElement}
            comments={state.comments}
            threadId={state.threadId}
            dataHeader={state.dataHeader}
            open={state.open}
            userName={state.userName}
          />
        </Router>
      </div>
    )
  }
}

export default App
