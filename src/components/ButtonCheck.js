
import React from 'react'

const ButtonCheck = ({idBlock, typeBlock, showCheck, changeDisplayCheck}) => {
  /* utiliser filter sur idBlock pour pour vérifier si true ou false et texte bouton = Masquer todos checké ou afficher toutes les todosstateHideCheck, */
  let textButton = 'afficher toutes les todos'
  showCheck.forEach(object => {
    if (object.idBlock === idBlock && object.show) {
      textButton = 'Masquer les todos checkées'
    }
  })
  if (typeBlock === 'todos') {
    return (
      <button onClick={() => changeDisplayCheck({idBlock})} >

        {textButton}
      </button>

    )
  }
  return null
}

export default ButtonCheck
