import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import ResourceElement from './ResourceElement'
import ButtonAddSection from './ButtonAddSection.js'
import { showAddSection, addSection, addNewElement } from '../actions/file.js'
import ResourceSection from './ResourceSection.js'

const ResourceBlock = ({ block, activeElement, comments, addSectionActive }) => {
  const sections = block.sections.map(section => <ResourceSection block={block} section={section} comments={comments} activeElement={activeElement} />)
  return (
    <Segment key={block._id}>
      <h2>{block.title}</h2>
      <Divider section />
      <ButtonAddSection blockId={block._id} showAddSection={showAddSection} addSection={addSection} addSectionActive={addSectionActive} />
      {sections}
    </Segment>
  )
}

export default ResourceBlock
