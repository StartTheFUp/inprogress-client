import React from 'react'
import EditorComment from './EditorComment.js'
import { Form, TextArea } from 'semantic-ui-react'
import './../style/comments.css'
import { editComment, addNewComment } from '../actions/file.js'

const AddComment = ({ threadId, addCommentActive }) => {
  return (
    <div>
      <div
        className="show-new-comment"
        onClick={() => addNewComment(threadId)}
      >
        + Ajouter un commentaire
      </div>

      {addCommentActive === ''
        ? null
        : <Form>
          <TextArea>
            <EditorComment
              editComment={editComment}
              rawContent=""
              threadId={threadId}
            />
          </TextArea>
        </Form>
      }
    </div>
  )
}

export default AddComment;
