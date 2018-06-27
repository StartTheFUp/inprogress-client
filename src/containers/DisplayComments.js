import React from 'react'
import EditorComment from '../components/EditorComment.js'
import { Segment, Comment } from 'semantic-ui-react'
import './../style/comments.css'
import { editComment } from '../actions/file.js'

const convertToDate = dateComment => {
  const date = new Date(dateComment)
    .toUTCString()
    .toLocaleString()
  return date
}
const DisplayComments = ({ comments, threadId, activeElement }) => {
  return (
    <Segment >
      <div style={{ display: (activeElement === '' ? 'none' : 'block') }} className='element_active'>{activeElement}</div>
      <Comment.Group>
        {comments.filter(threadComment => threadComment.id === threadId).map(com => com.comments.map(comment =>
          <Comment key={comment.id} className='comment'>
            <Comment.Content>
              <Comment.Avatar src='http://placeskull.com/50/50' />
              <Comment.Text>
                <EditorComment editComment={editComment} rawContent={comment.content} threadId={threadId} commentId={comment.id} />
              </Comment.Text>
              <Comment.Metadata>{convertToDate(comment.createdAt)} </Comment.Metadata>
            </Comment.Content>
          </Comment>))}
      </Comment.Group>
    </Segment >
  )
}

export default DisplayComments
