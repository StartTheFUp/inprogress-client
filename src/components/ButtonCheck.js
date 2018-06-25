import React from 'react'

const ButtonCheck = ({ blockId, typeBlock, showCheck, changeDisplayCheck }) => {
  let textButton = 'Afficher toutes les todos'
  showCheck.forEach(object => {
    if (object.blockId === blockId && object.show) {
      textButton = 'Masquer les todos checkées'
    }
  })
  if (typeBlock === 'todos') {
    return (
      <h2 className="todos-checked-title" onClick={() => changeDisplayCheck({ blockId })} >
        {textButton}
      </h2>
    )
  }

  return null
}

export default ButtonCheck
