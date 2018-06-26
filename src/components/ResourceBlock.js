import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import ResourceElement from './ResourceElement'
import ButtonAddSection from './ButtonAddSection.js'
import { showAddSection, addSection } from '../actions/file.js'

const ResourceBlock = ({ block, activeElement, comments, addSectionActive  }) => {

  const sections = block.sections.map(section => {
    const elements = section.elements
      .map(element => <ResourceElement comments={comments} key={element.id} element={element} blockId={block._id} sectionId={section.id} activeElement={activeElement}/>)

    return (
      <div key={section.id}>
        <h2>{section.title}</h2>
        {elements}
      </div>
    )
  })

  return (
    <Segment key={block._id}>
      <h2>{block.title}</h2>
      <Divider section />
      <ButtonAddSection blockId={block._id} showAddSection={showAddSection} addSection={addSection} addSectionActive={addSectionActive}/>
      {sections}
    </Segment>
  )
}

export default ResourceBlock
