import React from 'react'
import { Segment } from 'semantic-ui-react'
import './../style/comments.css'

const DisplayComments = ({comments, threadId, activeElement}) => {
  console.log('dfg', comments.find(comment => comment.id === threadId))
  return <Segment className="comments">
    <h2>{activeElement}</h2>
    {comments.filter(threadComment => threadComment.id === threadId).map(com => com.comments.map(comment =>
      <div key={comment.id}>
        <div>{comment.content}</div>
      </div>))}
  </Segment>
}

export default DisplayComments
