import React from 'react'
import Element from './Element.js'

const Section = ({section, indexBlock, indexSection, children}) => {
  return (
    <div key={section.title}>
      <h2>{section.title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default Section
