import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
const DisplayBlock = ({block, children}) => {
  return (
    <div /* key={block._id} */ className="AllBlocks">
      <Segment>
        <h1>{block.title}</h1>
        <Divider section />
        <div>{children}</div>
      </Segment>

    </div>
  )
}

export default DisplayBlock
