import React from 'react'
const comments = (comment) => {
  return (
    <div key={comment.id}>
      {comment.content}
    </div>
  )
}

const Comments = (comment) => {
  console.log("comment", comment.id)
  return (
    <div key={comment.id}>
      {comment.comments.map(comments)}
    </div>
  )
}

export default Comments
