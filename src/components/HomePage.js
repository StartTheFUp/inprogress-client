import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import '../style/HomePage.css'
import {verifyUser} from '../actions/file.js'

const HomePage = () => {
  return (
    <div className='connect'>
      <h1 className='title_compagny'>Start The Fuck Up</h1>
      <Segment className="form_parent">
        <Form className="form" onSubmit={(event) => verifyUser(event.target.email.value, event.target.password.value)}>
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

export default HomePage
