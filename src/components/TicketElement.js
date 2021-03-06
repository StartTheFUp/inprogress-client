import { showComments, archiveElement, changeElementContent, showActiveElement } from '../actions/file.js'
import React from 'react'
import EditorElement from './EditorElement.js'
import { Icon } from 'semantic-ui-react'
import '../style/TicketElement.css'

const TicketElement = ({ element, blockId, sectionId, activeElement, comments }) => {
  const elementContent = typeof element.content !== 'string' ? element.content.blocks[0].text : element.content
  return (
    <div key={element.id} className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_ticket' : 'element_ticket') : 'element_ticket' } >
      <div onClick={() => showComments(element.threadId, elementContent)}>
        <EditorElement rawContent={element.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={element.id} activeElement={activeElement}/>
      </div>
      <div className='element_components'>
        <div className='response_archive'>
          <p className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_count_reponses' : 'count_reponses') : 'count_reponses' } onClick={() => showComments(element.threadId, elementContent)}>
            {comments.find(threadComment => threadComment.id === element.threadId) ? comments.find(threadComment => threadComment.id === element.threadId).comments.length + ' réponses' : '0 réponses'}
          </p>
          <p className='archive' onClick={() => archiveElement(blockId, sectionId, element.id)}><Icon name='archive' /> {element.properties.archive ? 'Desarchiver' : 'Archiver'}</p>
        </div>
        <p className='drag'><Icon name='ellipsis vertical' /></p>
      </div>
    </div>
  )
}

export default TicketElement
