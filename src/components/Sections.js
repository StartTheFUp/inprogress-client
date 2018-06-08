import React from 'react'
import Elements from './Elements.js'

const Sections = ({section}) => {
  return (
    <div key={section.title}>
      <h2>{section.title}</h2>
      <div>{section.elements.map(element => {
        console.log("element", element)
       return <Elements key={element.id} elem={element} />
      })}</div>
    </div>
  )
}

export default Sections
