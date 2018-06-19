import React from 'react'
import { Segment, Comment } from 'semantic-ui-react'
import './../style/comments.css'

const DisplayComments = ({comments, threadId, activeElement}) => {
  console.log('activ', activeElement)
  return <Segment className="comments">

    <div style={{display: (activeElement === '' ? 'none' : 'block')}}className='element_active'>{activeElement}</div>
    {comments.filter(threadComment => threadComment.id === threadId).map(com => com.comments.map(comment =>
      <div key={comment.id} className='comment'>
        <div>{comment.content}</div>
        <div>{comment.createdAt}</div>
      </div>))}
  </Segment>
}

export default DisplayComments
