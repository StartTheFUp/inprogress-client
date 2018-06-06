import React from 'react'
import './DisplayBlocks.css'
import 'semantic-ui-css/semantic.min.css'
import Blocks from './Blocks.js'
const todoBlocks = (blocks) => blocks.filter(block => block.type === 'todos')
const billetBlocks = (blocks) => blocks.filter(block => block.type === 'billets')
const ressourceBlocks = (blocks) => blocks.filter(block => block.type === 'ressources')
const DisplayBlocks = (props) => {
  return (
    <div className='Blocks'>

      <div className='otherBlocks'>
        <div className='Billets'>
          {billetBlocks(props.blocks).map(Blocks)}
        </div>
        <div className='Ressources'>
          {ressourceBlocks(props.blocks).map(Blocks)}
        </div>
      </div>

      <div className='todos'>
        {todoBlocks(props.blocks).map(Blocks)}
      </div>
    </div>
  )
}

export default DisplayBlocks
