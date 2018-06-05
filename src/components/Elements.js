import React from 'react'

const Elements = elem => {
  return (
    <div key={elem._id}>
      <p>{elem.content}</p>
    </div>
  )
}

export default Elements
