import React, {Component} from 'react'
import BlocksContainer from './BlocksContainer.js'
import ProjectHeader from '../components/ProjectHeader'
import DisplayComments from '../containers/DisplayComments'
import Modal from 'react-responsive-modal'
import { updateModal, loadHeaderData, saveUser, addNewComment } from '../actions/file.js'
import api from '../api.js'
import { Grid, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../style/Dashboard.css'

class Dashboard extends Component {
  componentDidMount () {
    api.getProjectById(this.props.projectId)
      .then(loadHeaderData)
  }

  colorRandom=['red', 'orange', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']

  onOpenModal = () => updateModal({ open: true })

  onCloseModal = () => updateModal({ open: false })

  render () {
    let clientMap = ''
    if (this.props.dataHeader.client !== undefined) {
      clientMap = this.props.dataHeader.client.map(client => {
        return (
          <Button key={client.name} basic color={this.colorRandom[Math.floor(Math.random() * this.colorRandom.length)]} onClick={() => saveUser(client.name)}> {client.name} </Button>)
      })
    }

    console.log('PROPS ProjectID', this.props.projectId)
    console.log('MODAL', this.props.userName)
    return (
      <div className="dashboard">

        <Modal className="modalClients" open={this.props.open} onClose={() => updateModal(false)} center>
          <h2> Qui es tu ? </h2>
          <div className="client">
            {clientMap}
          </div>

        </Modal>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={11} className="main-column">
              <ProjectHeader data={this.props.dataHeader} userName={this.props.userName}/>
              <BlocksContainer blocks={this.props.blocks}
                shouldDisplayArchivedTickets={this.props.shouldDisplayArchivedTickets}
                showCheck={this.props.showCheck}
                addSectionActive={this.props.addSectionActive}
                activeElement={this.props.activeElement}
                comments={this.props.comments}/>
            </Grid.Column>
            <Grid.Column width={5} className="main-column">
              {this.props.activeElement === ''
                ? null
                : <DisplayComments comments={this.props.comments} threadId={this.props.threadId} activeElement={this.props.activeElement} addNewComment={addNewComment}/>}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Dashboard
