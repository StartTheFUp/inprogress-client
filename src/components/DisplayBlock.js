import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import './DisplayBlock.css'
const DisplayBlock = ({block, children, processedTickets, showProcessedTickets, showUnprocessedTickets}) => {
  return (
    <div key={block._id} className="AllBlocks">
      <Segment>
        <h1 className={(processedTickets === false ? 'billetEnCours' : 'billetTraite')} onClick={() => showUnprocessedTickets()}>{block.title}</h1>
        <div className={(processedTickets === false ? 'billetTraite' : 'billetEnCours')} onClick={() => showProcessedTickets()} style={{display: (block.type === 'billets' ? 'block' : 'none')}}>Billets traité</div>
        <Divider section />
        <div>{children}</div>
      </Segment>

    </div>
  )
}

export default DisplayBlock
