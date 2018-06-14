import { updateTodo } from '../actions/file.js'
import React from 'react'
import DisplayElement from '../components/DisplayElement.js'

const Element = (props) => {
  return <DisplayElement {...props} elementAction={updateTodo} />
}
export default Element
