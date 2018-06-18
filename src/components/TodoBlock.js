import React from 'react'
import ButtonCheck from './ButtonCheck.js'
import { changeDisplayCheck } from '../actions/file.js'
import { Segment, Divider } from 'semantic-ui-react'
import TodoElement from './TodoElement'

const TodoBlock = ({ block, showCheck }) => {
  let testShowCheck = false
  showCheck.forEach(object => {
    if (object.blockId === block._id && object.show) {
      testShowCheck = true
    }
  })

  const testFilter = (elt) => {
    if (testShowCheck === false) {
      return !(elt.properties.checked)
    } else {
      return true
    }
  }

  const sections = block.sections.map(section => {
    const elements = section.elements.filter(elt => testFilter(elt))
      .map(element => <TodoElement key={element.id} element={element} blockId={block._id} sectionId={section.id} />)
    return (
      <div key={section.id}>
        <h2>{section.title}</h2>
        {elements}
      </div>
    )
  })

  // TODO: handle display unchecked / all todos
  //

  return (
    <Segment key={block._id}>
      <h1>{block.title}</h1>
      <ButtonCheck typeBlock={block.type} blockId={block._id} showCheck={showCheck} changeDisplayCheck={changeDisplayCheck} />
      <Divider section />
      {sections}
    </Segment>
  )
}

export default TodoBlock
