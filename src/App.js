import React, { Component } from 'react'
import BlocksContainer from './containers/BlocksContainer.js'
import ProjectHeader from './components/ProjectHeader'
import HomePage from './components/HomePage.js'
import DisplayComments from './components/DisplayComments'
import Dashboard from './containers/Dashboard.js'
import { loadBlocks, loadComments, loadHeaderData } from './actions/file.js'
import { Router, Link } from '@reach/router'
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

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
    this.syncDatas()

    setInterval(() => api.updateBlocks(store.getState().blocks), 5 * 1000)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const state = store.getState()
    console.log('block app', state.addSectionActive)

    return (
      <div className="App">
        <Router>
          <HomePage path='/' />
          <Dashboard path='project/:projectName'
            blocks={state.blocks}
            shouldDisplayArchivedTickets={state.shouldDisplayArchivedTickets}
            showCheck={state.showCheck}
            addSectionActive={state.addSectionActive}
            activeElement={state.activeElement}
            comments={state.comments}
            threadId={state.threadId}
            activeElement={state.activeElement}
            dataHeader={state.dataHeader}
          />
        </Router>

      </div>
    )
  }
}

export default App
