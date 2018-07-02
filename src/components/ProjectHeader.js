import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from '@reach/router'
import '../style/ProjectHeader.css'

const ProjectHeader = ({ data, userName, action }) => {
  const resetLocalStorage = () => {
    localStorage.clear()
    action(true)
  }
  return (
    <Grid as="header" className="header-wrapper">
      <Grid.Row columns={2}>
        <Grid.Column width={2}>
          <Image className="project-image" src={data.pictureURL} />
        </Grid.Column>
        <Grid.Column width={10}>
          <h1 className="project-name">{data.name}</h1>
          <a className="project-link" href={data.websiteURL}>{data.websiteURL}</a>
        </Grid.Column>

        <Grid.Column width={4}>
          <div className="user-name-header"> Bonjour {userName}</div>
          <button onClick={resetLocalStorage}> Deconnexion </button>
          <Link to={`/`}><button style={{display: localStorage.token ? 'block' : 'none'}}> liste des projets </button></Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ProjectHeader
