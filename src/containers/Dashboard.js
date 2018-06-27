import React, { Component } from 'react'
import BlocksContainer from './BlocksContainer.js'
import ProjectHeader from '../components/ProjectHeader'
//import HomePage from './components/HomePage.js'
import DisplayComments from '../components/DisplayComments'
//import { loadBlocks, loadComments, loadHeaderData } from './actions/file.js'
//import { Router, Link } from '@reach/router'
//import { store } from './store.js'


import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
//import './style/App.css'

const Dashboard = ({ blocks, dataHeader, shouldDisplayArchivedTickets, showCheck, addSectionActive, activeElement, comments, threadId }) => {

  //const state = store.getState()
 //console.log('Dashboard app', blocks)

  return (
    <div className="dashboard">

      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={11} className="main-column">
            <ProjectHeader data={dataHeader} />
           <BlocksContainer blocks={blocks}
              shouldDisplayArchivedTickets={shouldDisplayArchivedTickets}
              showCheck={showCheck}
              addSectionActive={addSectionActive}
              activeElement={activeElement}
              comments={comments}/>
          </Grid.Column>
          <Grid.Column width={5} className="main-column">
            <DisplayComments comments={comments} threadId={threadId} activeElement={activeElement} />
          </Grid.Column>
        </Grid.Row>
  </Grid>
    </div>
  )
}




export default Dashboard
