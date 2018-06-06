import React from 'react'
import Elements from './Elements.js'

const Sections = (section) => {
  return (
    <div key={section.title}>
      <h2>{section.title}</h2>
      <div>{section.elements.map(Elements)}</div>
    </div>
  )
}

export default Sections
