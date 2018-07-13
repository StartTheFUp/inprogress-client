import React, { Component } from 'react'
import BlocksContainer from './BlocksContainer.js'
import ProjectHeader from '../components/ProjectHeader'
import DisplayComments from '../containers/DisplayComments'
import { updateModal, loadHeaderData, loadComments, loadBlocks, saveUser, addNewComment } from '../actions/file.js'
import api from '../api.js'
import { Grid, Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../style/Dashboard.css'
import { getColor } from '../murmur.js'

class Dashboard extends Component {
  componentDidMount () {
    api.getProjectById(this.props.projectId)
      .then(loadHeaderData)
    api.getComments()
      .then(loadComments)
    api.getBlocks(this.props.projectId)
      .then(loadBlocks)
  }

  onOpenModal = () => updateModal({ open: true })

  onCloseModal = () => updateModal({ open: false })

  render () {
    let clientMap = ''
    if (this.props.dataHeader.client !== undefined) {
      clientMap = this.props.dataHeader.client.map(client => {
        return (
          <Button key={client.name} style={{
            color: getColor(client.name, 0.7, 0.9),
            margin: 10,
            borderSize: 1,
            borderStyle: 'solid',
            borderRadius: 100,
            background: 'transparent'
          }} onClick={() => saveUser(client.name)}> {client.name} </Button>)
      })
    }
    const isConnect = !localStorage.userName

    return (
      <div className="dashboard">
        <Modal basic open={isConnect} onClose={() => updateModal(false)} center>
          <h2 className='title-choice' > Qui es tu ? </h2>
          <div className="client">
            {clientMap}
          </div>
        </Modal>

        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={11} className="main-column">
              <ProjectHeader data={this.props.dataHeader} userName={this.props.userName} action={updateModal}/>
              <BlocksContainer blocks={this.props.blocks}
                shouldDisplayArchivedTickets={this.props.shouldDisplayArchivedTickets}
                showCheck={this.props.showCheck}
                addSectionActive={this.props.addSectionActive}
                activeElement={this.props.activeElement}
                comments={this.props.comments} />
            </Grid.Column>
            <Grid.Column width={5} className="main-column">
              <DisplayComments showComment={this.props.showComment} comments={this.props.comments} threadId={this.props.threadId} activeElement={this.props.activeElement} addNewComment={addNewComment} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Dashboard
