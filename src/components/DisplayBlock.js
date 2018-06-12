import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import './DisplayBlock.css'

const DisplayBlock = ({ block, children }) => {
  return (
    <Segment key={block._id}>
      <h1>{block.title}</h1>
      <Divider section />
      <div>{children}</div>
    </Segment>
  )
}

export default DisplayBlock
