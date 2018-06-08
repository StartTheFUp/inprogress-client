import React from 'react'
const comments = (comment) => {
  return (
    <div>
      {comment.content}
    </div>
  )
}

const Comments = (comment) => {
  return (
    <div key={comment.id}>
      {comment.comments.map(comments)}
    </div>
  )
}

export default Comments
