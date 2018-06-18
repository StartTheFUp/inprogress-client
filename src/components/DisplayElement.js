import React from 'react'
import '../style/DisplayElement.css'
import EditorElement from './EditorElement.js'

/* console.log('defaultChecked', idBlock, idSection, idElement) */

const checkBoxTodos = ({ propertiesCheck, updateTodo }) => {
  /* console.log("checkboxTodos : " , idBlock, idSection, idElement) */
  if (propertiesCheck) {
    return <input className="checkBoxTodo" type="checkbox" defaultChecked onChange={updateTodo}/>
  }
  return <input className="checkBoxTodo" type="checkbox" onChange={updateTodo}/>
}

const DisplayElement = ({elem, idBlock, idSection, idElement, elementAction, showActiveElement, showComments, archiveElement, changeElementContent}) => {
  return (
    <div key={elem.createdAt} className="all-elements">
      <div className="ui checkbox" style={{display: (elem.type === 'todos' ? 'block' : 'none')}}>
        {checkBoxTodos({
          propertiesCheck: elem.properties.checked,
          updateTodo: () => elementAction({ type: elem.type, idBlock, idSection, idElement })
        })}
        <label><div className={(elem.properties.checked === true ? 'checked element' : 'notchecked element')} onClick={() => showComments(elem.threadId)}>
          <EditorElement rawContent={elem.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} idBlock={idBlock} idSection={idSection} idElement={idElement} />
        </div>
        </label>
      </div>
      <div className='element' onClick={() => showComments(elem.threadId)} style={{display: (elem.type !== 'todos' ? 'block' : 'none')}} >
        <EditorElement rawContent={elem.content} showActiveElement={showActiveElement} changeElementContent={changeElementContent} idBlock={idBlock} idSection={idSection} idElement={idElement} />
      </div>
      <p className='archive' style={{display: (elem.type === 'billets' && elem.properties.archive === false ? 'inline-block' : 'none')}} onClick={ () => archiveElement(idBlock, idSection, idElement) }>v Archive</p>
      <p className='archive' style={{display: (elem.type === 'billets' && elem.properties.archive === true ? 'inline-block' : 'none')}} onClick={ () => archiveElement(idBlock, idSection, idElement) }>v Désarchive</p>
    </div>
  )
}

export default DisplayElement
