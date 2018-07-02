import React from 'react'

const ButtonCheck = ({ blockId, typeBlock, showCheck, changeDisplayCheck }) => {
  const selectedBlock = showCheck.find(object => object.blockId === blockId)
  const textButton = selectedBlock && selectedBlock.show
    ? 'Masquer les todos checkées'
    : 'Afficher toutes les todos'

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
