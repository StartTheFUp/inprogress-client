import TicketElement from './TicketElement'
import React from 'react'
import { addNewElement, dragDropElements } from '../actions/file.js'
import { store } from '../store.js'
import Dragula from 'react-dragula'
import { Divider } from 'semantic-ui-react'
import '../style/ResourceSection.css'

class TicketSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: this.props.unprocessedTicketsElements,
      items2: this.props.processedTicketsElements,
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
      this.setState({ items2: this.props.processedTicketsElements, items: this.props.unprocessedTicketsElements, start: newStart })
    })

    drake.on('drop', (el, target, source, sibling) => {
      let droppedLocation = this.getIndexInParent(el)

      let result = this.props.shouldDisplayArchivedTickets ? this.moveItem(this.state.items2, this.state.start, droppedLocation) : this.moveItem(this.state.items, this.state.start, droppedLocation)
      if (this.props.shouldDisplayArchivedTickets) {
        this.setState({ items2: result })
      } else {
        this.setState({ items: result })
      }

      dragDropElements(this.state.items.concat(this.state.items2), this.props.block._id, this.props.section.id)
    })
  }

  getElements = () => (this.props.shouldDisplayArchivedTickets ? this.props.processedTicketsElements : this.props.unprocessedTicketsElements)
    .map(element => <TicketElement
      comments={this.props.comments}
      key={element.id}
      element={element}
      blockId={this.props.block._id}
      sectionId={this.props.section.id}
      activeElement={this.props.activeElement} />)

  render () {
    return (
      <div key={this.props.section.id} className='section'>
        <Divider section />
        <h2>{this.props.section.title}</h2>
        <p className={this.props.shouldDisplayArchivedTickets ? 'hidden' : 'new_element'} onClick={() => addNewElement({ sectionId: this.props.section.id, blockType: this.props.block.type })}>+ Ajouter un élément</p>
        <div className="dragula" ref={this.dragulaDecorator} >
          {this.getElements()}
        </div>
      </div>
    )
  }
}
export default TicketSection
