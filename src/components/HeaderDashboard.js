import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import './HeaderDashboard.css'

const HeaderDashboard = () => {
  return (
    <Grid as="header" className="header-wrapper">
      <Grid.Row columns={2}>
        <Grid.Column width={2}>
          <Image className="project-image" src='http://via.placeholder.com/150x150' />
        </Grid.Column>
        <Grid.Column width={14}>
          <h1 className="project-name">Nom du projet</h1>
          <a className="project-link" href="www.projetsite.com">www.projetsite.com</a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeaderDashboard
