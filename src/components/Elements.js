import React from 'react'

const Elements = elem => {
  return (
    <div key={elem.createdAt} className="allElem">
    <div className="ui checkbox" style={{display : (elem.type === "todos"?"block":"none") }}>
      <input className="example" type="checkbox"/>
      <label>  <p>{elem.content}</p>   </label>
    </div>
    <p style={{display : (elem.type === "todos"?"none":"block") }}>{elem.content}</p> 
    </div>
  )
}

export default Elements

//<input name="checkBoxName"  checktype="checkbox" onClick={() => console.log(this)}>
