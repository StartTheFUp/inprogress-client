import React from 'react'
import EditorElement from './EditorElement.js'
import { updateTodo, showComments, archiveElement, changeElementContent, showActiveElement } from '../actions/file.js'

const TodoElement = ({ element, blockId, sectionId }) => {
  return (
    <div key={element.id} className="element todo">
      <div className="ui checkbox">
        <input className="checkBoxTodo" type="checkbox" defaultChecked={element.properties.checked} onChange={() => updateTodo({ type: element.type, blockId, sectionId, elementId })}/>
        <label>
          <div className={element.properties.checked ? 'checked' : 'notchecked'} onClick={() => showComments(element.threadId)}>
            <EditorElement rawContent={element.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={element.id} />
          </div>
        </label>
      </div>
    </div>
  )
}

export default TodoElement
