import React from 'react'
const DisplaySection = ({ addNewBillet, idSection, section, children, blockType, processedTickets }) => {
  if (processedTickets === true && blockType === 'billets') {
    return (
      <div key={section.title}>
        <h2>{section.title}</h2>
        <div>{children.filter(({ props }) => props.elem.properties.archive === true)}</div>
      </div>
    )
  } else if (processedTickets === false && blockType === 'billets') {
    return (
      <div key={section.title}>
        <button onClick={() => addNewBillet({ idSection })}> New Billet</button>
        <h2>{section.title}</h2>
        <div>{children.filter(({ props }) => props.elem.properties.archive === false)}</div>
      </div>
    )
  } else {
    return (
      <div key={section.title}>
        <h2>{section.title}</h2>
        <div>{children}</div>
      </div>
    )
  }
}

export default DisplaySection
