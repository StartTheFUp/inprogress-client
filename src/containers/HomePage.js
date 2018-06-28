import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import '../style/HomePage.css'
import { store } from '../store.js'
import api from '../api.js'
class HomePage extends React.Component {
  fetchProjects = () => {
    fetch('/projects')
      .then(res => res.json())
      .then(projects => store.dispatch({ type: 'LOAD_PROJECTS', projects }))
  }

  signin = (email, mdp) => {
    const user = {
      email: email,
      password: mdp
    }
    console.log('its here ', email, mdp)
    api.userMatch(user)
      .then(res => res.json())
      .then(res => console.log('clares', res))
      // .then(() => this.fetchProjects())
  }

  render () {
    return (
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
    )
  }
}

export default HomePage
