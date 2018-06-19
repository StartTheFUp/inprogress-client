import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import ResourceElement from './ResourceElement'
import ButtonAddSection from './ButtonAddSection.js'
import { showAddSection } from '../actions/file.js'

const ResourceBlock = ({ block }) => {
  const sections = block.sections.map(section => {
    const elements = section.elements
      .map(element => <ResourceElement key={element.id} element={element} blockId={block._id} sectionId={section.id} />)

    return (
      <div key={section.id}>
        <h2>{section.title}</h2>
        {elements}
      </div>
    )
  })

  return (
    <Segment key={block._id}>
      <h1>{block.title}</h1>
      <ButtonAddSection blockId={block._id}  showAddSection = {showAddSection} />
      <Divider section />
      {sections}
    </Segment>
  )
}

export default ResourceBlock
