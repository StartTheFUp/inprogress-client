import React from 'react'
import Sections from './Sections.js'

const Blocks = (block) => {
  return (
    <div key={block._id}>
      <h1>{block.title}</h1>
      <div>{block.sections.map(Sections)}</div>
    </div>

  )
}

export default Blocks
