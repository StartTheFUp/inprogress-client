
import React from 'react'


const ButtonCheck = ({idBlock,typeBlock, showCheck, changeDisplayCheck}) => {
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
