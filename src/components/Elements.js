import React from 'react'

const Elements = elem => {
  return (
    <div key={elem.createdAt} className="allElem">
      <p>{elem.content}</p>
    </div>
  )
}

export default Elements
