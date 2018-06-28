import React from 'react'
import { Editor, EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import { createEditorStateWithText } from 'draft-js-plugins-editor'
import createLinkifyPlugin from 'draft-js-linkify-plugin'
// import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'
import '../style/EditorElement.css'
import 'draft-js/dist/Draft.css'

const linkifyPlugin = createLinkifyPlugin()
const plugins = [
  linkifyPlugin
]
class EditorComment extends React.Component {
  state = {
    editorState: typeof this.props.rawContent2 === 'string'
      ? createEditorStateWithText(this.props.rawContent)
      : EditorState.createWithContent(convertFromRaw(this.props.rawContent))
  }
  handleChange = (editorState) => {
    const currentContent = editorState.getCurrentContent()
    const rawData2 = convertToRaw(currentContent)
    this.props.editComment(this.props.threadId, this.props.commentId, rawData2)
    this.setState({editorState})
  }

  handleFocus = () => this.refs.editor.focus()
  render () {
    return (
      <div onClick={this.handleFocus} className='editor'>
        <Editor
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
