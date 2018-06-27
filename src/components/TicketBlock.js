import React from 'react'
import TicketElement from './TicketElement'
import { addNewElement, showProcessedTickets, showUnprocessedTickets, showAddSection, addSection } from '../actions/file.js'
import { Segment, Divider } from 'semantic-ui-react'
import ButtonAddSection from './ButtonAddSection.js'
import '../style/TicketBlock.css'

const archived = element => element.properties.archive
const notArchived = element => !element.properties.archive

const TicketBlock = ({ block, shouldDisplayArchivedTickets, activeElement, comments, addSectionActive }) => {
  const sections = block.sections.map(section => {
    const processedTicketsElements = section.elements.filter(archived)
    const unprocessedTicketsElements = section.elements.filter(notArchived)

    const elements = (shouldDisplayArchivedTickets ? processedTicketsElements : unprocessedTicketsElements)
      .map(element => <TicketElement comments={comments} key={element.id} element={element} blockId={block._id} sectionId={section.id} activeElement={activeElement}/>)

    return (
      <div key={section.id}>

        <h2>{section.title}</h2>
        <p className={shouldDisplayArchivedTickets ? 'hidden' : 'new_element'} onClick={() => addNewElement({ sectionId: section.id, blockType: block.type })}>Ajouter un element</p>
        {elements}
      </div>
    )
  })

  return (
    <Segment key={block._id}>

      <div className="titles-segment">
        <h2 className={shouldDisplayArchivedTickets ? 'processed-ticket' : 'unprocessed-ticket'} onClick={() => showUnprocessedTickets()}>{block.title}</h2>
        <h2 className={(shouldDisplayArchivedTickets ? 'unprocessed-ticket' : 'processed-ticket')} onClick={() => showProcessedTickets()} >Billets traités</h2>
      </div>
      <Divider section />
      <ButtonAddSection blockId={block._id} showAddSection = {showAddSection} addSection={addSection} addSectionActive={addSectionActive}/>
      {sections}
    </Segment>
  )
}

export default TicketBlock
