import React from 'react'
import TicketElement from './TicketElement'
import { addNewBillet, showProcessedTickets, showUnprocessedTickets, showAddSection, addSection } from '../actions/file.js'
import { Segment, Divider } from 'semantic-ui-react'
import ButtonAddSection from './ButtonAddSection.js'

const archived = element => element.properties.archive
const notArchived = element => !element.properties.archive

const TicketBlock = ({ block, shouldDisplayArchivedTickets, addSectionActive }) => {
  const sections = block.sections.map(section => {
    const processedTicketsElements = section.elements.filter(archived)
    const unprocessedTicketsElements = section.elements.filter(notArchived)

    const elements = (shouldDisplayArchivedTickets ? processedTicketsElements : unprocessedTicketsElements)
      .map(element => <TicketElement key={element.id} element={element} blockId={block._id} sectionId={section.id} />)

    return (
      <div key={section.id}>
        <button className={shouldDisplayArchivedTickets ? 'hidden' : ''} onClick={() => addNewBillet({ sectionId: section.id })}>Nouveau</button>
        <h2>{section.title}</h2>
        {elements}
      </div>
    )
  })

  return (
    <Segment key={block._id}>
      <h1 className={shouldDisplayArchivedTickets ? 'processed-ticket' : 'unprocessed-ticket'} onClick={() => showUnprocessedTickets()}>{block.title}</h1>
      <div className={(shouldDisplayArchivedTickets ? 'unprocessed-ticket' : 'processed-ticket')} onClick={() => showProcessedTickets()} >Billets traité</div>
      <ButtonAddSection blockId={block._id}  showAddSection = {showAddSection} addSection={addSection} addSectionActive={addSectionActive}/>
      <Divider section />
      {sections}
    </Segment>
  )
}

export default TicketBlock
