import React from 'react'
import Element from './Element.js'
import DisplaySection from '../components/DisplaySection.js'
import { addNewBillet, saveProject } from '../actions/file.js'


const Section = ({ section, blockId, sectionId, processedTickets, blockType, showCheck }) => {
  const addNewBilletAndSave = ({ sectionId }) => { addNewBillet({ sectionId }); saveProject(blockId) };
  return (
    <DisplaySection addNewBilletAndSave={addNewBilletAndSave} blockId={blockId} sectionId={sectionId} section={section} processedTickets={processedTickets} blockType={blockType} showCheck={showCheck}>
      {section.elements.map((element) => {
        return <Element key={element.id} elem={element} blockId={blockId} sectionId={sectionId} elementId={element.id} showCheck={showCheck} />
      })}
    </DisplaySection>)
}

export default Section
