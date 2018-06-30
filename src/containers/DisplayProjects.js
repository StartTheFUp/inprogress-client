import React from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'
import '../style/HomePage.css'
import { store } from '../store.js'
import api from '../api.js'
import { Link } from '@reach/router'

class DisplayProjects extends React.Component {
 /* fetchProjects = () => {
    fetch('/projects')
      .then(res => res.json())
      .then(projects => store.dispatch({ type: 'LOAD_PROJECTS', projects }))
  }*/
  state = {
    login: false
  }

  componentWillMount () {
    const token = localStorage.getItem('token')
    console.log('get token', token)
    if (token !== null) {
      api.adminProjects(token)
      .then(res => {console.log('DisplayProject will mount',res)})

    }
  }

render(){
  return (
    <div className='display-projects'>identification necessaire</div>
  )

}


}

export default DisplayProjects



