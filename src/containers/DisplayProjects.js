import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import '../style/HomePage.css'
import { store } from '../store.js'
import api from '../api.js'
import { Link } from '@reach/router'

class DisplayProjects extends Component {
  state = {
    login: false
  }

  colorRandom=['red', 'orange', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']

  componentDidMount () {
    const token = localStorage.getItem('token')
    console.log('get token', token)
    if (token !== null) {
      api.adminProjects(token)
        .then(res => res.json(res))
        .then(infoProjects => store.dispatch({ type: 'SAVE_ALL_PROJECT_ADMIN', infoProjects }))
    }
  }

  render () {
    let allProjects = 'identification necessaire'
    if (localStorage.getItem('token') !== null) {
      allProjects = this.props.adminProjects.map(project => {
        return (
          <Link to={`project/${project.id}`}>
            <Button basic color={this.colorRandom[Math.floor(Math.random() * this.colorRandom.length)]} className='buttonProject' id={project.id}>{project.name}</Button>
          </Link>
        )
      })
    }

    console.log('DP render', this.props.adminProjects)

    return (
      <div className='display-projects'>
        {allProjects}
      </div>

    )
  }
}

export default DisplayProjects
