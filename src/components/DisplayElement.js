import React from 'react'
import '../style/DisplayElement.css'

/* console.log('defaultChecked', idBlock, idSection, idElement) */

const checkBoxTodos = ({ propertiesCheck, updateTodo }) => {
  /* console.log("checkboxTodos : " , idBlock, idSection, idElement) */
  if (propertiesCheck) {
    return <input className="checkBoxTodo" type="checkbox" defaultChecked onChange={updateTodo}/>
  }
  return <input className="checkBoxTodo" type="checkbox" onChange={updateTodo}/>
}

const DisplayElement = ({elem, idBlock, idSection, idElement, elementAction, showComments, archiveElement}) => {
  return (
    <div key={elem.createdAt} className="all-elements">
      <div className="ui checkbox" style={{display: (elem.type === 'todos' ? 'block' : 'none')}}>
        {checkBoxTodos({
          propertiesCheck: elem.properties.checked,
          updateTodo: () => elementAction({ type: elem.type, idBlock, idSection, idElement })
        })}
        <label>  <p className={(elem.properties.checked === true ? 'checked element' : 'notchecked element')} onClick={() => showComments(elem.threadId, elem.content)}>{elem.content}</p>   </label>
      </div>
      <p className='element' onClick={() => showComments(elem.threadId, elem.content)} style={{display: (elem.type !== 'todos' ? 'block' : 'none')}}>{elem.content}</p>
      <button style={{display: (elem.type === 'billets' && elem.properties.archive === false ? 'block' : 'none')}} onClick={ () => archiveElement(idBlock, idSection, idElement) }>archive</button>
      <button style={{display: (elem.type === 'billets' && elem.properties.archive === true ? 'block' : 'none')}} onClick={ () => archiveElement(idBlock, idSection, idElement) }>Désarchive</button>
    </div>
  )
}

export default DisplayElement
