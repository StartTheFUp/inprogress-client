import React from 'react'
import Section from '../containers/Section.js'
import ButtonCheck from './ButtonCheck.js'
import { changeDisplayCheck } from '../actions/file.js'
import { Segment, Divider } from 'semantic-ui-react'
import TodoElement from './TodoElement'

const TodoBlock = ({ block, showCheck }) => {
    const sections = block.sections.map(section => {

    const elements = section.elements
      .map(element => <TodoElement key={element.id} element={element} blockId={block._id} sectionId={section.id} />)

    return (
      <div key={section.id}>
        <h2>{section.title}</h2>
        {elements}
      </div>
    )
  })

  // TODO: handle display unchecked / all todos
  // <ButtonCheck typeBlock={block.type} blockId={block._id} showCheck={showCheck} changeDisplayCheck={changeDisplayCheck} />

  return (
    <Segment key={block._id}>
      <h1>{block.title}</h1>

      <Divider section />
      {sections}
    </Segment>
  )
}

export default TodoBlock
