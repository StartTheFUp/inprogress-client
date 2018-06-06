import React from 'react'
import './DisplayBlocks.css'
import 'semantic-ui-css/semantic.min.css'
import Blocks from './Blocks.js'

// const todoBlocks = (blocks) => blocks.filter(block => block.type === 'todos')
// const billetBlocks = (blocks) => blocks.filter(block => block.type === 'billets')
// const ressourceBlocks = (blocks) => blocks.filter(block => block.type === 'ressources')

const typeBlocks = (blocks, Type) => blocks.filter(block => block.type === Type)

const DisplayBlocks = (props) => {
  return (
    <div className='Blocks'>

      <div className='otherBlocks'>
        <div className='Billets'>
          {typeBlocks(props.blocks, 'billets').map(Blocks)}
        </div>
        <div className='Ressources'>
          {typeBlocks(props.blocks, 'ressources').map(Blocks)}
        </div>
      </div>

      <div className='todos'>
        {typeBlocks(props.blocks, 'todos').map(Blocks)}
      </div>
    </div>
  )
}

export default DisplayBlocks
