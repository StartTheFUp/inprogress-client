import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import '../style/HomePage.css'
import { store } from '../store.js'
import api from '../api.js'
import { Link } from '@reach/router'
import { getColor } from '../murmur'

class DisplayProjects extends Component {
  state = {
    login: false
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    if (token !== null) {
      api.adminProjects(token)
        .then(res => res.json(res))
        .then(infoProjects => store.dispatch({ type: 'SAVE_ALL_PROJECT_ADMIN', infoProjects }))
    }
  }

  render () {
    let allProjects = this.props.auth === '' ? 'identification nécessaire' : 'identifiant ou mot de passe incorrect'
    if (localStorage.getItem('token') !== null) {
      allProjects = this.props.adminProjects.map(project => {
        return (
          <div key={project.id} >
            <Link to={`project/${project.id}`}>
              <Button style={{
                color: getColor(project.id + project.name, 0.45, 0.8),
                margin: 10,
                borderSize: 1,
                borderStyle: 'solid',
                borderRadius: 100,
                background: 'transparent',
                width: 150
              }} className='buttonProject' id={project.id}>{project.name}</Button>
            </Link>
          </div>
        )
      })
    }

    return (
      <div className='display-projects'>
        {allProjects}
      </div>

    )
  }
}

export default DisplayProjects
