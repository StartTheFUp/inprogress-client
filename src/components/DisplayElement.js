import React from 'react'
/* console.log('defaultChecked', indexBlock, indexSection, indexElement) */
// les indexBlock... sont faux car il y a des filter dans DisplayBlock par ex !

const checkBoxTodos = ({ propertiesCheck, updateTodo }) => {
  /* console.log("checkboxTodos : " , indexBlock, indexSection, indexElement) */
  if (propertiesCheck) {
    return <input className="checkBoxTodo" type="checkbox" defaultChecked onChange={updateTodo}/>
  }
  return <input className="checkBoxTodo" type="checkbox" onChange={updateTodo}/>
}

const DisplayElement = ({elem, indexBlock, indexSection, indexElement, elementAction}) => {
  return (
    <div key={elem.createdAt} className="allElem">
      <div className="ui checkbox" style={{display: (elem.type === 'todos' ? 'block' : 'none')}}>
        {checkBoxTodos({
          propertiesCheck: elem.properties.checked,
          updateTodo: () => elementAction({ type: elem.type, indexBlock, indexSection, indexElement })
        })}
        <label>  <p>{elem.content}</p>   </label>
      </div>
      <p style={{display: (elem.properties.archive === false ? 'block' : 'none')}}>{elem.content}</p>
    </div>
  )
}

export default DisplayElement
