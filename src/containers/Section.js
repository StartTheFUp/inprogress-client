import React from 'react'
import Element from './Element.js'
import DisplaySection from '../components/DisplaySection.js'
import { addNewBillet } from '../actions/file.js'

const Section = ({ section, idBlock, idSection, processedTickets, blockType, showCheck }) =>
  <DisplaySection addNewBillet={addNewBillet} idBlock={idBlock} idSection={idSection} section={section} processedTickets={processedTickets} blockType={blockType} showCheck={showCheck}>
    {section.elements.map((element) => {
      return <Element key={element.id} elem={element} idBlock={idBlock} idSection={idSection} idElement={element.id} />
    })}
  </DisplaySection>

export default Section
