import React from 'react'

const ButtonAddSection = ({blockId, addSection}) => {

    return (
      <span onClick={() => addSection({blockId})} >
        ajouter une section
      </span>
    )

}

export default ButtonAddSection
