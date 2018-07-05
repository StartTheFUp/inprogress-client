import { showComments, changeElementContent, showActiveElement } from '../actions/file.js'
import React from 'react'
import EditorElement from './EditorElement.js'
import '../style/ResourceElement.css'
import { Icon } from 'semantic-ui-react'
const ResourceElement = ({ element, blockId, sectionId, activeElement, comments }) => {
  const elementContent = typeof element.content !== 'string' ? element.content.blocks[0].text : element.content
  return (

    <div key={element.id} className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_resource' : 'element_resource') : 'element_resource'}>
      <div onClick={() => showComments(element.threadId, elementContent)}>

        <EditorElement rawContent={element.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={element.id} activeElement={activeElement} />
      </div>

      <div className='element_components'>
        <p className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_count_reponses' : 'count_reponses') : 'count_reponses'}>
          {comments.find(threadComment => threadComment.id === element.threadId) ? comments.find(threadComment => threadComment.id === element.threadId).comments.length + ' réponses' : '0 réponse'}
        </p>
        <p className='drag'><Icon name='arrows alternate' /></p>
      </div>
    </div>

  )
}

export default ResourceElement
