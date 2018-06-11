import { actions } from '../actions/file.js'
import React from 'react'
import DisplayElement from '../components/DisplayElement.js'

const Element = (props) =>
  <DisplayElement {...props} elementAction={actions.updateTodo} />

export default Element
