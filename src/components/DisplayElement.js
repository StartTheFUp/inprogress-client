import React from 'react'
/* console.log('defaultChecked', idBlock, idSection, idElement) */

const checkBoxTodos = ({ propertiesCheck, updateTodo }) => {
  /* console.log("checkboxTodos : " , idBlock, idSection, idElement) */
  if (propertiesCheck) {
    return <input className="checkBoxTodo" type="checkbox" defaultChecked onChange={updateTodo}/>
  }
  return <input className="checkBoxTodo" type="checkbox" onChange={updateTodo}/>
}

const DisplayElement = ({elem, idBlock, idSection, idElement, elementAction}) => {
  return (
    <div key={elem.createdAt} className="allElem">
      <div className="ui checkbox" style={{display: (elem.type === 'todos' ? 'block' : 'none')}}>
        {checkBoxTodos({
          propertiesCheck: elem.properties.checked,
          updateTodo: () => elementAction({ type: elem.type, idBlock, idSection, idElement })
        })}
        <label>  <p>{elem.content}</p>   </label>
      </div>
      <p style={{display: (elem.type !== 'todos' ? 'block' : 'none')}}>{elem.content}</p>
    </div>
  )
}

export default DisplayElement
