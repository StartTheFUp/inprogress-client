import { updateTodo, showComments, archiveElement } from '../actions/file.js'
import React from 'react'
import DisplayElement from '../components/DisplayElement.js'

const Element = (props) =>
  <DisplayElement {...props} elementAction={updateTodo} showComments={showComments} archiveElement={archiveElement}/>

export default Element
