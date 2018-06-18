import React from 'react'
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './../style/DisplayBlocks.css'

const filterByType = (blocks, type) => blocks.filter(block => block.type === type)

const DisplayBlocks = ({ children }) => {
  // const todoBlocks = filterByType(blocks, 'todos')
  // const billetBlocks = filterByType(blocks, 'billets')
  // const ressourceBlocks = filterByType(blocks, 'ressources')

  return (
    <Grid divided='vertically' className="all-elements">
      <Grid.Row columns={2}>
        <Grid.Column>
          <div className='block billets'>
            {children.filter(({ props }) => props.block.type === 'billets')}
          </div>
          <div className='block ressources'>
            {children.filter(({ props }) => props.block.type === 'ressources')}
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='block todos'>
            {children.filter(({ props }) => props.block.type === 'todos')}
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default DisplayBlocks
