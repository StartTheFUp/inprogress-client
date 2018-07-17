import React from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import { Link } from '@reach/router'
import '../style/ProjectHeader.css'

const ProjectHeader = ({ data, userName, action, lastSaveTime }) => {
  const resetLocalStorage = () => {
    localStorage.clear()
    action(true)
  }
  const convertToDate = dateSave => {
    const date = new Date(dateSave)
      .toUTCString()
      .toLocaleString()
    return date
  }

  return (
    <Grid as="header" className="header-wrapper">

      <Grid.Row columns={2}>
        <Grid.Column width={2}>
          <Image className="project-image" src={data.pictureURL} />
        </Grid.Column>
        <Grid.Column width={9}>
          <h1 className="project-name">{data.name}</h1>
          <a className="project-link" href={data.websiteURL}>{data.websiteURL}</a>
          <div className='last-update-header' style={{display: lastSaveTime !== '' ? 'block' : 'none'}}>
            Dernière sauvegarde à {convertToDate(lastSaveTime)}
          </div>
        </Grid.Column>

        <Grid.Column width={5}>

          <div className="user-name-header"> Bonjour {userName}</div>
          <div className='user-option'>
            <Button className='btn-head' onClick={resetLocalStorage} compact>Deconnexion</Button>
            <Link to={`/`}><Button className='btn-head' compact style={{display: localStorage.token ? 'block' : 'none'}}>Liste des projets</Button></Link>
          </div>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default ProjectHeader
