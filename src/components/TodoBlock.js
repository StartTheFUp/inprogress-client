import React from 'react'
import ButtonCheck from './ButtonCheck.js'
import { changeDisplayCheck, showAddSection, addSection } from '../actions/file.js'
import { Segment, Divider } from 'semantic-ui-react'
import TodoSection from './TodoSection'
import ButtonAddSection from './ButtonAddSection.js'
import '../style/TodosBlock.css'

const TodoBlock = ({ block, showCheck, activeElement, comments, addSectionActive }) => {
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
  const testFilter2 = (elt) => {
    if (testShowCheck === true) {
      return (elt.properties.checked)
    } else {
      return false
    }
  }

  const sections = block.sections.map(section => {
    const filteredSection = section.elements.filter(elt => testFilter(elt))
    const checkedSection = section.elements.filter(elt => testFilter2(elt))
    return (
      <TodoSection key={section.id}
        filteredSection={filteredSection}
        comments={comments}
        activeElement={activeElement}
        section={section}
        block={block}
        showCheck={showCheck}
        checkedSection={checkedSection}
      />
    )
  })

  // TODO: handle display unchecked / all todos
  //

  return (
    <Segment key={block._id}>

      <div className="titles-segment">
        <h2 className="todos-unchecked-title">{block.title} </h2>
        <ButtonCheck typeBlock={block.type} blockId={block._id} showCheck={showCheck} changeDisplayCheck={changeDisplayCheck} />
      </div>
      <Divider section />
      <ButtonAddSection blockId={block._id} showAddSection={showAddSection} addSection={addSection} addSectionActive={addSectionActive} />
      {sections}
    </Segment>
  )
}

export default TodoBlock
