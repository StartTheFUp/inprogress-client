import React from 'react'
import Block from './Block.js'
import DisplayBlocks from '../components/DisplayBlocks.js'

const Blocks = ({ blocks, comments, processedTickets, showCheck }) => {
  const _blocks = blocks.map(block =>
    <Block key={block._id}
      block={block}
      blockId={block._id}
      processedTickets={processedTickets}
      showCheck={showCheck}
    />
  )

  return (
    <DisplayBlocks comments={comments} processedTickets={processedTickets} >
      {_blocks}
    </DisplayBlocks>
  )
}

export default Blocks
