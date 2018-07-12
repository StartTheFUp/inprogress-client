import React, { Component } from 'react'
import HomePage from './containers/HomePage.js'
import Dashboard from './containers/Dashboard.js'
import { Router } from '@reach/router'
import { loadComments } from './actions/file.js'
import { store } from './store.js'
import api from './api.js'

import 'semantic-ui-css/semantic.min.css'
import './style/App.css'

class App extends Component {
  state = {
    lastSyncTime: 0
  }

  syncDatas = () => {
    setInterval(() => {
      //db mise à jour si dernier MaJ state est sup au dernier envoi en db ET (pas de chgt du state pdt 2s. OU le dernier envoi en db date de + de 10s)
      if ((store.getState().dateUpdateState > this.state.lastSyncTime )
          && ((Date.now()-store.getState().dateUpdateState > 2000) || (Date.now()-this.state.lastSyncTime > 10000))) {
        console.log('lancement api',Date.now(), store.getState().dateUpdateState  )
        //date envoi requete
        this.setState({ lastSyncTime: Date.now() })
        console.log('SYNC<HRO last :', this.state.lastSyncTime)
        api.updateBlocks(store.getState().blocks)
        .then(res => console.log("API blocks", res))

        api.updateComments(store.getState().comments)
        .then(res => console.log("API comments", res))
      }
    }, 1 * 1000)
  }

  fetchDatas = () => {
    api.getComments()
      .then(loadComments)
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
    this.fetchDatas()
    this.syncDatas()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const _state = store.getState()
    console.log('block app local storage!!!!', localStorage.getItem('userName'))

    return (
      <div className="App">
        <Router>
          <HomePage path='/' adminProjects={_state.adminProjects} auth={_state.authentification}/>
          <Dashboard path='project/:projectId'
            blocks={_state.blocks}
            shouldDisplayArchivedTickets={_state.shouldDisplayArchivedTickets}
            showCheck={_state.showCheck}
            addSectionActive={_state.addSectionActive}
            activeElement={_state.activeElement}
            comments={_state.comments}
            threadId={_state.threadId}
            dataHeader={_state.dataHeader}
            open={_state.open}
            userName={_state.userName}
            showComment={_state.showComment}
          />
        </Router>
      </div>
    )
  }
}

export default App
