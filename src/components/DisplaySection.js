import React from 'react'
const DisplaySection = ({section, idBlock, idSection, children}) => {
  return (
    <div key={section.title}>
      <h2>{section.title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default DisplaySection
