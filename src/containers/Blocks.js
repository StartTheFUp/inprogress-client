import React from 'react'
import Block from './Block.js'
import DisplayBlocks from '../components/DisplayBlocks.js'

const Blocks = ({blocks, comments}) => {
  return <DisplayBlocks comments={comments} >
    {blocks.map((block) => {
      return <Block key={block._id} block={block} idBlock={block._id}/>
    })}
  </DisplayBlocks>
}

export default Blocks
