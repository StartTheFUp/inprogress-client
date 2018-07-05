import React from 'react'

import { showProcessedTickets, showUnprocessedTickets, showAddSection, addSection } from '../actions/file.js'
import { Segment, Divider } from 'semantic-ui-react'
import ButtonAddSection from './ButtonAddSection.js'
import '../style/TicketBlock.css'
import TicketSection from './TicketSection'

const archived = element => element.properties.archive
const notArchived = element => !element.properties.archive

const TicketBlock = ({ block, shouldDisplayArchivedTickets, activeElement, comments, addSectionActive }) => {
  const countElement = block.sections.map(section => section.elements.filter(notArchived).length).reduce((acc, value) => acc + value)
  const sections = block.sections.map(section => {
    const processedTicketsElements = section.elements.filter(archived)
    const unprocessedTicketsElements = section.elements.filter(notArchived)

    console.log('archive', processedTicketsElements, 'notarchived', unprocessedTicketsElements)
    return (
      <TicketSection section={section}
        block={block}
        activeElement={activeElement}
        comments={comments}
        shouldDisplayArchivedTickets={shouldDisplayArchivedTickets}
        key={section.id}
        processedTicketsElements={processedTicketsElements}
        unprocessedTicketsElements={unprocessedTicketsElements}
      />)
  })
  return (
    <Segment key={block._id}>

      <div className="titles-segment">
        <h2 className={shouldDisplayArchivedTickets ? 'processed-ticket' : 'unprocessed-ticket'} onClick={() => showUnprocessedTickets()}>{block.title}({countElement})</h2>
        <h2 className={(shouldDisplayArchivedTickets ? 'unprocessed-ticket' : 'processed-ticket')} onClick={() => showProcessedTickets()} >Billets traités</h2>
      </div>
      <Divider section />
      <ButtonAddSection blockId={block._id} showAddSection={showAddSection} addSection={addSection} addSectionActive={addSectionActive} />
      {sections}
    </Segment>
  )
}

export default TicketBlock
