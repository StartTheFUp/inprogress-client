import React from 'react'
import Element from './Element.js'
import DisplaySection from '../components/DisplaySection.js'
import { addNewBillet } from '../actions/file.js'

const Section = ({ section, blockId, sectionId, processedTickets, blockType, showCheck }) => {

  const elements = section.elements.map(element =>
    <Element key={element.id}
      elem={element}
      blockId={blockId}
      sectionId={sectionId}
      elementId={element.id}
      showCheck={showCheck}
    />
  )

  return (
    <DisplaySection
      addNewBillet={addNewBillet}
      blockId={blockId}
      sectionId={sectionId}
      section={section}
      processedTickets={processedTickets}
      blockType={blockType}
      showCheck={showCheck} >
      {elements}
    </DisplaySection>
  )
}

export default Section
