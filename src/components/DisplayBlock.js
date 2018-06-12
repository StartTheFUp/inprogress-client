import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
const DisplayBlock = ({block, children, processedTickets, action}) => {
  return (
    <div key={block._id} className="AllBlocks">
      <Segment>
        <h1>{block.title}</h1>
        <div onClick={() => action(processedTickets)} style={{display: (block.type === 'billets' ? 'block' : 'none')}}>Billets traité</div>
        <Divider section />
        <div>{children}</div>
      </Segment>

    </div>
  )
}

export default DisplayBlock
