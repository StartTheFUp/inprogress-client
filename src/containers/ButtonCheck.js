
import React from 'react'
import { changeDisplayCheck } from '../actions/file.js'

const ButtonCheck = ({idBlock,typeBlock}) => {
  /*utiliser filter sur idBlock pour pour vérifier si true ou false et texte bouton = Masquer todos checké ou afficher toutes les todosstateHideCheck,*/
  if (typeBlock === 'todos') {
    return (
      <button onClick={() => changeDisplayCheck({idBlock})}  >
        Masquer checkBox
      </button>

    )
  }
  return null

}

export default ButtonCheck
