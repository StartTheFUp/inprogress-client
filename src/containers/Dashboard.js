import React, { Component } from 'react'
import BlocksContainer from './BlocksContainer.js'
import ProjectHeader from '../components/ProjectHeader'
//import HomePage from './components/HomePage.js'
import DisplayComments from '../components/DisplayComments'
import Modal from 'react-responsive-modal'
import { updateModal } from '../actions/file.js'
//import { Router, Link } from '@reach/router'
//import { store } from '../store.js'

import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
//import './style/App.css'

class Dashboard extends Component {
/*= ({ blocks, dataHeader, shouldDisplayArchivedTickets, showCheck, addSectionActive, activeElement, comments, threadId, open }) => {*/

 // state = store.getState()
 //console.log('Dashboard app', blocks)
 /*state = {
   open:true
 }*/


  onOpenModal = () => updateModal({ open:true })
  // this.setState({ open: true });

  onCloseModal = () => updateModal({ open:false })
    //this.setState({ open: false });

  render() {
    //const { open } = this.state.open
    console.log('PROPS ProjectID', this.props.projectId)
    console.log('MODAL', this.props.open)
  return (
    <div className="dashboard">

    <Modal open={this.props.open} onClose={()=> updateModal( false )} center>
     <h2> Qui est tu ? </h2>

    </Modal>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={11} className="main-column">
            <ProjectHeader data={this.props.dataHeader} />
           <BlocksContainer blocks={this.props.blocks}
              shouldDisplayArchivedTickets={this.props.shouldDisplayArchivedTickets}
              showCheck={this.props.showCheck}
              addSectionActive={this.props.addSectionActive}
              activeElement={this.props.activeElement}
              comments={this.props.comments}/>
          </Grid.Column>
          <Grid.Column width={5} className="main-column">
            <DisplayComments comments={this.props.comments} threadId={this.props.threadId} activeElement={this.props.activeElement} />
          </Grid.Column>
        </Grid.Row>
  </Grid>
    </div>
  )
}
}




export default Dashboard

/*

const Dashboard = ({ blocks, dataHeader, shouldDisplayArchivedTickets, showCheck, addSectionActive, activeElement, comments, threadId, open }) => {

  //const state = store.getState()
 //console.log('Dashboard app', blocks)
  const onOpenModal = () => {
    updateModal(true)
  }

  const onCloseModal = () => {
    upadteModal(false)
  }

  const { open } = open

  return (
    <div className="dashboard">
    <Modal open={open} onClose={oncloseModal()} center>
      Super modale !
    </Modal>
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
*/
