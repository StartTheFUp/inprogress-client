import { showComments, archiveElement, changeElementContent, showActiveElement } from '../actions/file.js'
import React from 'react'
import EditorElement from './EditorElement.js'
import '../style/TicketElement.css'

const TicketElement = ({ element, blockId, sectionId }) => {
  return (
    <div key={element.id} className="element_ticket">
      <div onClick={() => showComments(element.threadId)}>
        <EditorElement rawContent={element.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={element.id} />
      </div>
      <p className='archive' onClick={() => archiveElement(blockId, sectionId, element.id)}>{element.properties.archive ? 'Desarchiver' : 'Archiver'}</p>
    </div>
  )
}

export default TicketElement
