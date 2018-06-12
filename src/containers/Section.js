import React from 'react'
import Element from './Element.js'
import DisplaySection from '../components/DisplaySection.js'

const Section = ({ section, idBlock, idSection, processedTickets, blockType }) =>
  <DisplaySection section={section} processedTickets={processedTickets} blockType={blockType}>
    {section.elements.map((element) => {
      return <Element key={element.id} elem={element} idBlock={idBlock} idSection={idSection} idElement={element.id}/>
    })}
  </DisplaySection>

export default Section
