import ResourceElement from './ResourceElement'
import React from 'react'
import { addNewElement } from '../actions/file.js'
import { store } from '../store.js'
import Dragula from 'react-dragula'
import '../style/ResourceSection.css'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}
 const moveItem = (array, fromIndex, toIndex) =>{
  const arrayCopy = array.slice()
  const item = arrayCopy[fromIndex]
  arrayCopy.splice(fromIndex, 1) // remove field that's moving
  arrayCopy.splice(toIndex, 0, item) // add it back
  return arrayCopy
}
class ResourceSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: this.props.section.elements
    }

  }
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = {}
      Dragula([componentBackingInstance], options)
    }
  }

  getElements = () => this.props.section.elements
    .map(element => <ResourceElement comments={this.props.comments}
      key={element.id}
      element={element}
      blockId={this.props.block._id}
      sectionId={this.props.section.id}
      activeElement={this.props.activeElement}
    />)

 render () {
    console.log('noulnoul', this.state.items)
    return (
      <div key={this.props.section.id}>
        <h2>{this.props.section.title}</h2>
        <p className='new_element' onClick={() => addNewElement({ sectionId: this.props.section.id, blockType: this.props.block.type })}>Ajouter un element</p>
        <div className="dragula" ref={this.dragulaDecorator} >
          {this.getElements()}
        </div>
      </div>
    )
  }
}
export default ResourceSection
