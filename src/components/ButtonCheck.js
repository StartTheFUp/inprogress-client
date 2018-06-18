import React from 'react'

const ButtonCheck = ({ blockId, typeBlock, showCheck, changeDisplayCheck }) => {
  let textButton = 'afficher toutes les todos'
  showCheck.forEach(object => {
    if (object.blockId === blockId && object.show) {
      textButton = 'Masquer les todos checkées'
    }
  })
  if (typeBlock === 'todos') {
    return (
      <button onClick={() => changeDisplayCheck({ blockId })} >
        {textButton}
      </button>
    )
  }

  return null
}

export default ButtonCheck
