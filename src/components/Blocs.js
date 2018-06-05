import React from 'react'
import Sections from './Sections.js'

const Blocs = (bloc) => {
  return (
    <div key={bloc._id}>
      <h1>{bloc.title}</h1>
      <div>{bloc.sections.map(Sections)}</div>
    </div>

  )
}

export default Blocs
