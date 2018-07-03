import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import '../style/HomePage.css'
import { store } from '../store.js'
import api from '../api.js'
import DisplayProjects from './DisplayProjects.js'

class HomePage extends React.Component {
  colorRandom=['red', 'orange', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']

  signin = (email, mdp) => {
    const user = {
      email: email,
      password: mdp
    }
    console.log('SIGNIN HomePage')
    api.userMatch(user)
      .then(res => res.json())
      .then(cred => store.dispatch({ type: 'SIGNIN_ADMIN', cred }))
      .then(() => {
        const token = localStorage.getItem('token')
        console.log('get token', token)
        if (token !== null && token !== undefined) {
          api.adminProjects(token)
            .then(res => res.json(res))
            .then(infoProjects => store.dispatch({ type: 'SAVE_ALL_PROJECT_ADMIN', infoProjects }))
        }
      })
  }

  render () {
    /* const allProject = this.props.projectsAdmin.map(project => {
      return (
        <Link to={`project/${project.id}`}>
          <Button basic color={this.colorRandom[Math.floor(Math.random() * this.colorRandom.length)]} className='buttonProject' id={project.id}>{project.name}</Button>
        </Link>
      )
    }) */

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
          <DisplayProjects adminProjects={this.props.adminProjects} auth={this.props.auth}/>
        </Segment>
      </div>
    )
  }
}

export default HomePage
