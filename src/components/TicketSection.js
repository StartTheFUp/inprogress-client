import TicketElement from './TicketElement'
import React from 'react'
import { addNewElement, dragDropElements } from '../actions/file.js'
import { store } from '../store.js'
import Dragula from 'react-dragula'
import '../style/ResourceSection.css'

class TicketSection extends React.Component {
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
    console.log({ i })
    return i
  }

  dragulaDecorator = (componentBackingInstance) => {
    // if (componentBackingInstance) {
    //   let options = {}
    // }
    const drake = Dragula([componentBackingInstance]) //, options)

    drake.on('drag', (el, target, source, sibling) => {
      console.log('drag')
      let newStart = this.getIndexInParent(el)
      this.setState({ items: this.props.section.elements, start: newStart })
      console.log('nouveau items', this.state.items)
    })

    drake.on('drop', (el, target, source, sibling) => {
      console.log('drop')
      let droppedLocation = this.getIndexInParent(el)
      let result = this.moveItem(this.state.items, this.state.start, droppedLocation)
      this.setState({ items: result })
      dragDropElements(this.state.items, this.props.block._id, this.props.section.id)
    })
  }

  getElements = () => (this.props.shouldDisplayArchivedTickets ? this.props.processedTicketsElements : this.props.unprocessedTicketsElements)
    .map(element => <TicketElement
      comments={this.props.comments}
      key={element.id}
      element={element}
      blockId={this.props.block._id}
      sectionId={this.props.section.id}
      activeElement={this.activeElement} />)

  render () {
    console.log('noulnoul', this.state.items)
    return (
      <div key={this.props.section.id}>
        <h2>{this.props.section.title}</h2>
        <p className={this.props.shouldDisplayArchivedTickets ? 'hidden' : 'new_element'} onClick={() => addNewElement({ sectionId: this.props.section.id, blockType: this.props.block.type })}>Ajouter un element</p>
        <div className="dragula" ref={this.dragulaDecorator} >
          {this.getElements()}
        </div>
      </div>
    )
  }
}
export default TicketSection
