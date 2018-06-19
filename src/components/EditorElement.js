import React from 'react'
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import { createEditorStateWithText } from 'draft-js-plugins-editor'
import createLinkifyPlugin from 'draft-js-linkify-plugin'
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
    console.log({ currentContent, rawData }, 'coucou', this.props.rawContent)
    this.props.changeElementContent(this.props.blockId, this.props.sectionId, this.props.elementId, rawData)

    this.setState({editorState})
    this.props.showActiveElement(rawData.blocks[0].text)
  }

  handleFocus = () => this.refs.editor.focus()
  render () {
    return (
      <div onClick={this.handleFocus} className="editor">
        <Editor
          placeholder='Votre texte'
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
