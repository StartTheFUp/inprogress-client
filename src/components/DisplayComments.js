import React from 'react'
import { Segment, Comment } from 'semantic-ui-react'
import './../style/comments.css'

const DisplayComments = ({ comments, threadId, activeElement }) => {
  return <Segment >
    <div style={{ display: (activeElement === '' ? 'none' : 'block') }} className='element_active'>{activeElement}</div>
    <Comment.Group>
      {comments.filter(threadComment => threadComment.id === threadId).map(com => com.comments.map(comment =>
        <Comment key={comment.id} className='comment'>
          <Comment.Content>
            <Comment.Avatar src='http://placeskull.com/50/50' />
            <Comment.Text>{comment.content}</Comment.Text>
            <Comment.Metadata>{comment.createdAt} </Comment.Metadata>
          </Comment.Content>
        </Comment>))}
    </Comment.Group>
  </Segment >
}

export default DisplayComments
