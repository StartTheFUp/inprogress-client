import React from 'react'

const checkBoxTodos = (propertiesCheck) => {
  if (propertiesCheck) {
    return  <input className="checkBoxTodo" type="checkbox" defaultChecked/>
  }
  return <input className="checkBoxTodo" type="checkbox" />

}

const Elements = elem => {
  return (
    <div key={elem.createdAt} className="allElem">
    <div className="ui checkbox" style={{display : (elem.type === "todos"?"block":"none") }}>
     {checkBoxTodos(elem.properties.checked)}
      <label>  <p>{elem.content}</p>   </label>
    </div>
    <p style={{display : (elem.type === "todos"?"none":"block") }}>{elem.content}</p> 
    </div>
  )
}

export default Elements

//<input name="checkBoxName"  checktype="checkbox" onClick={() => console.log(this)}>
