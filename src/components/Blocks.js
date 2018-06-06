import React from 'react'
import Sections from './Sections.js'
import { Segment, Divider } from 'semantic-ui-react'

const Blocks = (block) => {
  return (
    <div key={block._id} className="AllBlocks">
      <Segment>
        <h1>{block.title}</h1>
        <Divider section />
        <div>{block.sections.map(Sections)}</div>
      </Segment>

    </div>
  )
}

export default Blocks
