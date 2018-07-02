import ResourceElement from './ResourceElement'
import React from 'react'
import { addNewElement, dragDropElements } from '../actions/file.js'
import { store } from '../store.js'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250
})

class ResourceSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: this.props.section.elements
    }
    this.onDragEnd = this.onDragEnd.bind(this)
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }
  onDragEnd (result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    )

    this.setState({
      items: items
    })
    dragDropElements(this.state.items, this.props.block._id, this.props.section.id)
  }

  /* getElements = () => this.state.items
    .map((element, index) => <ResourceElement comments={this.props.comments}
      key={element.id}
      element={element}
      blockId={this.props.block._id}
      sectionId={this.props.section.id}
      activeElement={this.props.activeElement}
      index={index}
      getItemStyle={getItemStyle} />) */
  render () {
    console.log('state section:', this.state.items)
    return (
      <div key={this.props.section.id}>
        <h2>{this.props.section.title}</h2>
        <p className='new_element' onClick={() => addNewElement({ sectionId: this.props.section.id, blockType: this.props.block.type })}>Ajouter un element</p>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {this.state.items.map((item, index) => <ResourceElement comments={this.props.comments}
                  key={item.id}
                  element={item}
                  blockId={this.props.block._id}
                  sectionId={this.props.section.id}
                  activeElement={this.props.activeElement}
                  index={index}
                  getItemStyle={getItemStyle} />
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    )
  }
}
export default ResourceSection
