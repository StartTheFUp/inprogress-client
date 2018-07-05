import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'

import ButtonAddSection from './ButtonAddSection.js'
import { showAddSection, addSection } from '../actions/file.js'
import ResourceSection from './ResourceSection.js'

const ResourceBlock = ({ block, activeElement, comments, addSectionActive }) => {
  const sections = block.sections.map(section => <ResourceSection key={section.id} block={block} section={section} comments={comments} activeElement={activeElement} />)
  return (
    <Segment key={block._id}>
      <h2 className='resource-title'>{block.title}</h2>
      <Divider section />
      <ButtonAddSection blockId={block._id} showAddSection={showAddSection} addSection={addSection} addSectionActive={addSectionActive} />
      {sections}
    </Segment>
  )
}

export default ResourceBlock
