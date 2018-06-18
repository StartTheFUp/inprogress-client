import React from 'react'
import DisplayBlock from '../components/DisplayBlock.js'
import Section from './Section.js'
import { showUnprocessedTickets, showProcessedTickets, changeDisplayCheck } from '../actions/file.js'

const Block = ({ block, blockId, processedTickets, showCheck }) => {
  const sections = block.sections.map(section =>
    <Section key={section.id}
      section={section}
      blockId={block._id}
      sectionId={section.id}
      processedTickets={processedTickets}
      blockType={block.type}
      showCheck={showCheck}
    />
  )

  return (
    <DisplayBlock
      block={block}
      showUnprocessedTickets={showUnprocessedTickets}
      showProcessedTickets={showProcessedTickets}
      processedTickets={processedTickets}
      showCheck={showCheck}
      changeDisplayCheck={changeDisplayCheck} >
      {sections}
    </DisplayBlock>
  )
}

export default Block
