import React from 'react'
const DisplaySection = ({section, idBlock, idSection, children}) => {console.log('childrensection', {children})
  return (
    <div key={section.title}>
      <h2>{section.title}</h2>
      <div>{children.filter(({props}) => props.elem.properties.archive === false)}</div>
    </div>
  )
}

export default DisplaySection
