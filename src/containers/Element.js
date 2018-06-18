import { updateTodo, showComments, archiveElement, changeElementContent, showActiveElement } from '../actions/file.js'
import React from 'react'
import DisplayElement from '../components/DisplayElement.js'

const Element = (props) =>
  <DisplayElement {...props} showActiveElement={showActiveElement} elementAction={updateTodo} showComments={showComments} archiveElement={archiveElement} changeElementContent={changeElementContent}/>

export default Element
