import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import './../style/DisplayBlock.css'

const DisplayBlock = ({ block, children, processedTickets, showProcessedTickets, showUnprocessedTickets }) => {
  return (
    <Segment key={block._id}>
      <h1 className={(block.type === 'billets' ? (processedTickets === false ? 'unprocessed-ticket' : 'processed-ticket') : '')} onClick={() => showUnprocessedTickets()}>{block.title}</h1>
      <div className={(processedTickets === false ? 'processed-ticket' : 'unprocessed-ticket')} onClick={() => showProcessedTickets()} style={{ display: (block.type === 'billets' ? 'block' : 'none') }}>Billets traité</div>
      <Divider section />
      <div>{children}</div>
    </Segment>
  )
}

export default DisplayBlock
