import TodoElement from './TodoElement'
import React from 'react'
import { addNewElement, dragDropElements } from '../actions/file.js'
import { store } from '../store.js'
import Dragula from 'react-dragula'
import { Divider } from 'semantic-ui-react'
import '../style/ResourceSection.css'

class TodoSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: this.props.section.elements,
      start: 0,
      end: 0
    }
  }
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  moveItem = (array, fromIndex, toIndex) => {
    const arrayCopy = array.slice()
    const item = arrayCopy[fromIndex]
    arrayCopy.splice(fromIndex, 1) // remove field that's moving
    arrayCopy.splice(toIndex, 0, item) // add it back
    return arrayCopy
  }

  getIndexInParent = (el) => {
    const i = Array.from(el.parentNode.children).indexOf(el)
    return i
  }

  dragulaDecorator = (componentBackingInstance) => {
    const drake = Dragula([componentBackingInstance]) //, options)
    drake.on('drag', (el, target, source, sibling) => {
      let newStart = this.getIndexInParent(el)
      this.setState({ items: this.props.section.elements, start: newStart })
    })

    drake.on('drop', (el, target, source, sibling) => {
      let droppedLocation = this.getIndexInParent(el)
      let result = this.moveItem(this.state.items, this.state.start, droppedLocation)
      this.setState({ items: result })
      dragDropElements(this.state.items, this.props.block._id, this.props.section.id)
    })
  }

  getElements = () => this.props.filteredSection
    .map(element => <TodoElement
      comments={this.props.comments}
      key={element.id}
      element={element}
      blockId={this.props.block._id}
      sectionId={this.props.section.id}
      activeElement={this.props.activeElement} />)

  render () {
    const todosElements = this.props.block.sections.filter(section => section.id === this.props.section.id).map(section => section.elements.length).reduce((a, b) => a + b, 0)
    const todosElementsCheck = this.props.block.sections.filter(section => section.id === this.props.section.id).map(section => section.elements.filter(elt => elt.properties.checked === true).length).reduce((a, b) => a + b, 0)
    return (
      <div key={this.props.section.id} className='section'>
        <Divider section />
        <h2>{this.props.section.title} <span className='nb-todos-check'> ({todosElementsCheck}/{todosElements})</span></h2>
        <p className='new_element' onClick={() => addNewElement({ sectionId: this.props.section.id, blockType: this.props.block.type })}>+ Ajouter un élément</p>
        <div className="dragula" ref={this.dragulaDecorator} >
          {this.getElements()}
        </div>
      </div>
    )
  }
}
export default TodoSection
