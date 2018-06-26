import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import ResourceElement from './ResourceElement'

const ResourceBlock = ({ block, activeElement, comments }) => {
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
      {sections}
    </Segment>
  )
}

export default ResourceBlock
