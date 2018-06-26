import { showComments, changeElementContent, showActiveElement } from '../actions/file.js'
import React from 'react'
import EditorElement from './EditorElement.js'
import '../style/ResourceElement.css'

const ResourceElement = ({ element, blockId, sectionId, activeElement }) => {
  return (
    <div key={element.id} className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_resource' : 'element_resource') : 'element_resource' }>
      <div onClick={() => showComments(element.threadId)}>
        <EditorElement rawContent={element.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={element.id} />
      </div>
    </div>
  )
}

export default ResourceElement
