import React from 'react'
import EditorElement from './EditorElement.js'
import '../style/TodoElement.css'
import { updateTodo, showComments, changeElementContent, showActiveElement } from '../actions/file.js'

const TodoElement = ({ element, blockId, sectionId, activeElement, comments }) => {
  return (
    <div key={element.id} className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_todo' : 'element_todo') : 'element_todo'}>
      <div className="ui checkbox">
        <input className="checkBoxTodo" type="checkbox" defaultChecked={element.properties.checked} onChange={() => updateTodo({ type: element.type, blockId, sectionId, elementId: element.id })}/>
        <label>
          <div className={element.properties.checked ? 'checked' : 'notchecked'} onClick={() => showComments(element.threadId)}>
            <EditorElement rawContent={element.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={element.id} />
          </div>
          <div className='element_components'>
            <p className={typeof element.content !== 'string' ? (element.content.blocks[0].text === activeElement ? 'active_count_reponses' : 'count_reponses') : 'count_reponses' }>
              {comments.find(threadComment => threadComment.id === element.threadId) ? comments.find(threadComment => threadComment.id === element.threadId).comments.length + ' réponses' : '0 réponses'}
            </p>
          </div>
        </label>
      </div>
    </div>
  )
}

export default TodoElement
