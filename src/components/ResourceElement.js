import { updateTodo, showComments, archiveElement, changeElementContent, showActiveElement } from '../actions/file.js'
import React from 'react'
import EditorElement from './EditorElement.js'

const ResourceElement = ({ element, blockId, sectionId }) => {
  return (
    <div key={element.id} className="element resource">
      <div onClick={() => showComments(element.threadId)}>
        <EditorElement rawContent={element.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={element.id} />
      </div>
    </div>
  )
}

export default ResourceElement
