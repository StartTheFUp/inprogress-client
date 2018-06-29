import React from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'
import '../style/HomePage.css'
import { store } from '../store.js'
import api from '../api.js'
import { Link } from '@reach/router'

class HomePage extends React.Component {
  fetchProjects = () => {
    fetch('/projects')
      .then(res => res.json())
      .then(projects => store.dispatch({ type: 'LOAD_PROJECTS', projects }))
  }

  colorRandom=['red', 'orange', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']

  signin = (email, mdp) => {
    const user = {
      email: email,
      password: mdp
    }

    api.userMatch(user)
      .then(res => res.json())
      .then(infoProjects => store.dispatch({ type: 'SAVE_ALL_PROJECT_ADMIN', infoProjects }))
  }

  render () {
    const allProject = this.props.projectsAdmin.map(project => {
      return (
        <Link to={`project/${project.id}`}>
          <Button basic color={this.colorRandom[Math.floor(Math.random() * this.colorRandom.length)]} className='buttonProject' id={project.id}>{project.name}</Button>
        </Link>
      )
    })

    return (
      <div>
        <div className='connect'>
          <h1 className='title_compagny'>Start The Fuck Up</h1>
          <Segment className="form_parent">
            <Form className="form" onSubmit={(event) => this.signin(event.target.email.value, event.target.password.value)}>
              <Form.Group>
                <Form.Input type='email' placeholder='Email' name='email'/>
                <Form.Input type='password' placeholder='password' name='password'/>
                <Form.Button type='submit' content='Submit' />
              </Form.Group>
            </Form>
          </Segment>
        </div>
        <Segment>
          <div className='displayProjects'>{allProject}</div>
        </Segment>
      </div>
    )
  }
}

export default HomePage
