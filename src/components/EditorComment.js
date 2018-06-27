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
class EditorComment extends React.Component {
  state = {
    editorState: typeof this.props.rawContent === 'string'
      ? createEditorStateWithText(this.props.rawContent)
      : EditorState.createWithContent(convertFromRaw(this.props.rawContent))

  }
  handleChange = (editorState) => {
    const currentContent = editorState.getCurrentContent()
    const rawData = convertToRaw(currentContent)
    this.props.editComment(this.props.threadId, this.props.commentId, rawData)
    this.setState({editorState})
  }

  handleFocus = () => this.refs.editor.focus()
  render () {
    return (
      <div onClick={this.handleFocus} className='editor'>
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

export default EditorComment
