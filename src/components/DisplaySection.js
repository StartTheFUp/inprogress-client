import React from 'react'
const DisplaySection = ({ addNewBillet, blockId, sectionId, section, children, blockType, processedTickets, showCheck }) => {
  console.log('DISPLAY SECTION showCheck', showCheck)
  // test si blockId est present dans showCheck et egal à true
  let testShowCheck = false
  showCheck.forEach(object => {
    if (object.blockId === blockId && object.show) {
      testShowCheck = true
    }
  })

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
        <button onClick={() => addNewBillet({ sectionId })}> New Billet</button>
        <h2>{section.title}</h2>
        <div>{children.filter(({ props }) => props.elem.properties.archive === false)}</div>
      </div>
    )
  } else if (blockType === 'todos' && !testShowCheck) {
    return (
      <div key={section.title}>

        <h2>{section.title}</h2>
        <div>{children.filter(({ props }) => props.elem.properties.checked === false)}</div>
      </div>
    )
  } else if (blockType === 'todos' && testShowCheck) {
    return (
      <div key={section.title}>
        <h2>{section.title}</h2>
        <div>{children}</div>
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
