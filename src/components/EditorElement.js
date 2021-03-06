import React from 'react'
import {store} from '../store.js'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'
import createLinkifyPlugin from 'draft-js-linkify-plugin'
import 'draft-js/dist/Draft.css'
// import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'
import '../style/EditorElement.css'

const linkifyPlugin = createLinkifyPlugin()
const plugins = [
  linkifyPlugin
]

class EditorElement extends React.Component {
  state = {
    editorState: typeof this.props.rawContent === 'string'
      ? createEditorStateWithText(this.props.rawContent)
      : EditorState.createWithContent(convertFromRaw(this.props.rawContent))

  }
  handleChange = (editorState) => {
    const currentContent = editorState.getCurrentContent()
    const rawData = convertToRaw(currentContent)
    this.props.changeElementContent(this.props.blockId, this.props.sectionId, this.props.elementId, rawData)
    this.setState({editorState})
    if (store.getState().showComment) {
      this.props.showActiveElement(rawData.blocks[0].text)
    }
  }
  handleFocus = () => this.refs.editor.focus()
  handleAutoFocus = () => {
    if (this.props.rawContent.blocks[0].text === '') {
      this.refs.editor.focus()
      this.props.showActiveElement(this.props.rawContent.blocks[0].text)
    }
  }

  render () {
    return (
      <div onPointerOver={this.handleAutoFocus} onClick={this.handleFocus} className='editor'>

        <Editor
          placeholder='Votre text ici'
          editorState={this.state.editorState}
          onChange={this.handleChange}
          plugins={plugins}
          ref ='editor'
        />
      </div>
    )
  }
}

export default EditorElement
