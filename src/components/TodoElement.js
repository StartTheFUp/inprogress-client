import React from 'react'
import EditorElement from './EditorElement.js'
import '../style/TodoElement.css'
import { showComments, startFadeIn, changeElementContent, showActiveElement } from '../actions/file.js'
import { Icon } from 'semantic-ui-react'

const TodoElement = ({ element, blockId, sectionId, activeElement, comments }) => {
  const elementClass = ((typeof element.content !== 'string' && element.content.blocks[0].text === activeElement)
    ? 'active_todo'
    : 'element_todo') + (Date.now() - element.properties.fadingStart < 2000 ? ' fade-in' : '')

  return (
    <div key={element.id} className={elementClass}>
      <div className="ui checkbox">
        <input className="checkBoxTodo" type="checkbox" defaultChecked={element.properties.checked} onChange={() => {
          startFadeIn({ type: element.type, blockId, sectionId, elementId: element.id })
        }}/>
        <label>
          <div className={element.properties.checked ? 'checked' : 'notchecked'} onClick={() => showComments(element.threadId)}>
            <EditorElement activeElement={activeElement }rawContent={element.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={element.id} />
          </div>
          <div className='element_components'>
            <p className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_count_reponses' : 'count_reponses') : 'count_reponses' }>
              {comments.find(threadComment => threadComment.id === element.threadId) ? comments.find(threadComment => threadComment.id === element.threadId).comments.length + ' réponses' : '0 réponses'}
            </p>
            <p className='drag'><Icon name='arrows alternate' /></p>
          </div>
        </label>
      </div>
    </div>
  )
}

export default TodoElement
