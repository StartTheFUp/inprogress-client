import ResourceElement from './ResourceElement'
import React from 'react'
import { addNewElement } from '../actions/file.js'
import {store} from '../store.js'

class ResourceSection extends React.Component {
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  getElements = () => this.props.section.elements
    .map(element => <ResourceElement comments={this.props.comments}
      key={element.id}
      element={element}
      blockId={this.props.block._id}
      sectionId={this.props.section.id}
      activeElement={this.props.activeElement} />)

  render () {
    return (
      <div key={this.props.section.id}>
        <h2>{this.props.section.title}</h2>
        <p className='new_element' onClick={() => addNewElement({ sectionId: this.props.section.id, blockType: this.props.block.type })}>Ajouter un element</p>
        {this.getElements()}
      </div>
    )
  }
}
export default ResourceSection
