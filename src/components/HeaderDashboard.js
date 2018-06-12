import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import './HeaderDashboard.css'

const HeaderDashboard = ({data}) => {
  return (
    <Grid as="header" className="header-wrapper">
      <Grid.Row columns={2}>
        <Grid.Column width={2}>
          <Image className="project-image" src={data.pictureURL} />
        </Grid.Column>
        <Grid.Column width={14}>
          <h1 className="project-name">{data.name}</h1>
          <a className="project-link" href="www.projetsite.com">{data.websiteURL}</a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default HeaderDashboard
