import React from 'react'
import ButtonCheck from './ButtonCheck.js'
import { changeDisplayCheck, showAddSection, addSection } from '../actions/file.js'
import { Segment, Divider } from 'semantic-ui-react'
import TodoElement from './TodoElement'
import ButtonAddSection from './ButtonAddSection.js'
import '../style/TodosBlock.css'

const TodoBlock = ({ block, showCheck, addSectionActive }) => {
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
        <h3>{section.title}</h3>
        {elements}
      </div>
    )
  })

  // TODO: handle display unchecked / all todos
  //

  return (
    <Segment key={block._id}>

      <div className="titles-segment">
        <h2 className="todos-unchecked-title">{block.title}</h2>
        <ButtonCheck typeBlock={block.type} blockId={block._id} showCheck={showCheck} changeDisplayCheck={changeDisplayCheck} />
        <ButtonAddSection blockId={block._id} showAddSection={showAddSection} addSection={addSection} addSectionActive={addSectionActive}/>
      </div>
      <Divider section />
      {sections}
    </Segment>
  )
}

export default TodoBlock
