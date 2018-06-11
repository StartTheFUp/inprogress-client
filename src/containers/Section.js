import React from 'react'
import Element from './Element.js'
import DisplaySection from '../components/DisplaySection.js'
const Section = ({ section, indexBlock, indexSection }) =>
  <DisplaySection section={section}>
    {section.elements.map((element, index) => {
      return <Element key={element.id} elem={element} indexBlock={indexBlock} indexSection={indexSection} indexElement={index}/>
    })}
  </DisplaySection>
export default Section
