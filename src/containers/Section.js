import React from 'react'
import Element from './Element.js'
import DisplaySection from '../components/DisplaySection.js'

const Section = ({ section, idBlock, idSection }) =>
  <DisplaySection section={section} >
    {section.elements.map((element) => {
      return <Element key={element.id} elem={element} idBlock={idBlock} idSection={idSection} idElement={element.id}/>
    })}
  </DisplaySection>

export default Section
