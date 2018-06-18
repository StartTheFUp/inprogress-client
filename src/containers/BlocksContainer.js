import React from 'react'
import { Grid } from 'semantic-ui-react'
import TicketBlock from '../components/TicketBlock'
import ResourceBlock from '../components/ResourceBlock'
import TodoBlock from '../components/TodoBlock'

const filterByType = (blocks, type) => blocks.filter(block => block.type === type)

const BlocksContainer = ({ blocks, comments, shouldDisplayArchivedTickets, showCheck }) => {
  const ticketBlocks = filterByType(blocks, 'billets')
    .map(block => <TicketBlock key={block._id} block={block} shouldDisplayArchivedTickets={shouldDisplayArchivedTickets} />)

  const resourceBlocks = filterByType(blocks, 'ressources')
    .map(block => <ResourceBlock key={block._id} block={block} />)

  const todoBlocks = filterByType(blocks, 'todos')
    .map(block => <TodoBlock key={block._id} block={block} showCheck={showCheck} />)

  return (
    <Grid divided='vertically' className="all-elements">
      <Grid.Row columns={2}>
        <Grid.Column>
          <div className='block billets'>
            {ticketBlocks}
          </div>
          <div className='block ressources'>
            {resourceBlocks}
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='block todos'>
            {todoBlocks}
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default BlocksContainer
