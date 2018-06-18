import React from 'react'

const ButtonCheck = ({ blockId, typeBlock, showCheck, changeDisplayCheck }) => {
  /* utiliser filter sur blockId pour pour vérifier si true ou false et texte bouton = Masquer todos checké ou afficher toutes les todosstateHideCheck, */
  let textButton = 'Masquer les todos checkées'
  showCheck.forEach(object => {
    if (object.blockId === blockId && object.show) {
      textButton = 'afficher toutes les todos'
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
