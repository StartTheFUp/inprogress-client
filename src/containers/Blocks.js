import React from 'react'
import Block from './Block.js'
import DisplayBlocks from '../components/DisplayBlocks.js'
const Blocks = ({blocks, comments, processedTickets, showCheck}) => {
  return <DisplayBlocks comments={comments} processedTickets={processedTickets}  >
    {blocks.map((block) => {
      return <Block key={block._id} block={block} idBlock={block._id} processedTickets={processedTickets}  showCheck={showCheck}/>
    })}
  </DisplayBlocks>
}

export default Blocks
