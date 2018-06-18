import React from 'react'
import '../style/DisplayElement.css'
import EditorElement from './EditorElement.js'

/* console.log('defaultChecked', blockId, sectionId, elementId) */

const checkBoxTodos = ({ propertiesCheck, updateTodo }) => {
  /* console.log("checkboxTodos : " , blockId, sectionId, elementId) */
  if (propertiesCheck) {
    return <input className="checkBoxTodo" type="checkbox" defaultChecked onChange={updateTodo}/>
  }
  return <input className="checkBoxTodo" type="checkbox" onChange={updateTodo}/>
}

const DisplayElement = ({elem, blockId, sectionId, elementId, elementAction, showActiveElement, showComments, archiveElement, changeElementContent}) => {
  return (
    <div key={elem.createdAt} className="all-elements">
      <div className="ui checkbox" style={{display: (elem.type === 'todos' ? 'block' : 'none')}}>
        {checkBoxTodos({
          propertiesCheck: elem.properties.checked,
          updateTodo: () => elementAction({ type: elem.type, blockId, sectionId, elementId })
        })}
        <label><div className={(elem.properties.checked === true ? 'checked element' : 'notchecked element')} onClick={() => showComments(elem.threadId)}>
          <EditorElement rawContent={elem.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={elementId} />
        </div>
        </label>
      </div>
      <div className='element' onClick={() => showComments(elem.threadId)} style={{display: (elem.type !== 'todos' ? 'block' : 'none')}} >
        <EditorElement rawContent={elem.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} blockId={blockId} sectionId={sectionId} elementId={elementId} />
      </div>
      <p className='archive' style={{display: (elem.type === 'billets' && elem.properties.archive === false ? 'inline-block' : 'none')}} onClick={ () => archiveElement(blockId, sectionId, elementId) }>v Archive</p>
      <p className='archive' style={{display: (elem.type === 'billets' && elem.properties.archive === true ? 'inline-block' : 'none')}} onClick={ () => archiveElement(blockId, sectionId, elementId) }>v Désarchive</p>
    </div>
  )
}

export default DisplayElement
