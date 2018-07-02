import { showComments, changeElementContent, showActiveElement } from '../actions/file.js'
import React from 'react'
import EditorElement from './EditorElement.js'
import '../style/ResourceElement.css'
import { Draggable } from 'react-beautiful-dnd'

const ResourceElement = ({ element, blockId, sectionId, activeElement, comments, index, getItemStyle }) => {
  return (
    <Draggable key={element.id} draggableId={element.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <div className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_resource' : 'element_resource') : 'element_resource'}>
            <div onClick={() => showComments(element.threadId)}>

              <EditorElement rawContent={element.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={element.id} />
            </div>
          </div>
          <div className='element_components'>
            <p className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_count_reponses' : 'count_reponses') : 'count_reponses'}>
              {comments.find(threadComment => threadComment.id === element.threadId) ? comments.find(threadComment => threadComment.id === element.threadId).comments.length + ' réponses' : '0 réponses'}
            </p>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default ResourceElement
