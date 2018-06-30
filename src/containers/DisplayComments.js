/* Redux & librairies */
import React from 'react'
import { editComment } from '../actions/file.js'
import { Comment, Segment } from 'semantic-ui-react'
/* Components */
import EditorComment from '../components/EditorComment.js'
/* CSS */
import './../style/comments.css'

const convertToDate = dateComment => {
  const date = new Date(dateComment)
    .toUTCString()
    .toLocaleString()
  return date
}
const DisplayComments = ({ comments, threadId, activeElement, addNewComment }) => {
  return (
    <Segment>
      <div className={activeElement ? 'comments-container' : 'comments-none'}>
        <div className='element_active'>{activeElement}</div>
        <Comment.Group>
          {comments.filter(threadComment => threadComment.id === threadId)
            .map(com => com.comments
              .map(comment =>
                <Comment key={comment.id} className='comment'>
                  <Comment.Content>
                    <Comment.Avatar src='http://placeskull.com/50/50' />
                    <Comment.Text>
                      <EditorComment
                        editComment={editComment}
                        rawContent2={comment.content}
                        threadId={threadId}
                        commentId={comment.id} />
                    </Comment.Text>
                    <Comment.Metadata>{convertToDate(comment.createdAt)} </Comment.Metadata>
                  </Comment.Content>
                </Comment>))}
        </Comment.Group>
        <a className='add_comment' onClick={() => addNewComment(threadId)}>

        + Ajouter un commentaire
        </a>
      </div>
    </Segment>
  )
}

export default DisplayComments
