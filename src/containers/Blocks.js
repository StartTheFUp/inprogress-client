import React from 'react'
import Block from './Block.js'
import DisplayBlocks from '../components/DisplayBlocks.js'

const Blocks = ({blocks}) => {
  console.log('bien recup', blocks)
  return <DisplayBlocks >
    {blocks.map((block, index) => {
      return <Block key={block._id} block={block} indexBlock={index}/>
    })}
  </DisplayBlocks>
}

export default Blocks
