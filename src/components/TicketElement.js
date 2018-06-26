import { showComments, archiveElement, changeElementContent, showActiveElement } from '../actions/file.js'
import React from 'react'
import EditorElement from './EditorElement.js'
import '../style/TicketElement.css'

const TicketElement = ({ element, blockId, sectionId, activeElement, comments }) => {
  return (
    <div key={element.id} className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_ticket' : 'element_ticket') : 'element_ticket' } >
      <div onClick={() => showComments(element.threadId)}>
        <EditorElement rawContent={element.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={element.id} activeElement={activeElement}/>
      </div>
      <div className='element_components'>
        <p className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_count_reponses' : 'count_reponses') : 'count_reponses' }>
          {comments.find(threadComment => threadComment.id === element.threadId) ? comments.find(threadComment => threadComment.id === element.threadId).comments.length + ' réponses' : '0 réponses'}
        </p>
        <p className='archive' onClick={() => archiveElement(blockId, sectionId, element.id)}>{element.properties.archive ? 'Desarchiver' : 'Archiver'}</p>
      </div>
    </div>
  )
}

export default TicketElement
