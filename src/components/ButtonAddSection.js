import React from 'react'

const ButtonAddSection = ({blockId, showAddSection, addSection, addSectionActive }) => {
  console.log("BUTTON SECTION : " , showAddSection)

    return (
      <div className="addSection">
        <button onClick={() => showAddSection(blockId)}  style={{ display: (addSectionActive !== blockId ?  'block' : 'none' )} }>
          ajouter une section
        </button>
        <form className="add-section-form" onSubmit={()=>addSection({blockId})} style={{ display: (addSectionActive === blockId ? 'block' : 'none'  )} }>
        <div onClick = {()=>showAddSection(blockId) }> X </div>
          <input id="add-bloc-title-form" type="text" placeholder="titre" name="title" />
          <input type="submit"  value = "Ajouter la section" />
        </form>
      </div>
    )
}

export default ButtonAddSection

/*
addSection : action mettant a jour le state avec la nouvelle section
showAddSection : action ki permet d'afficher/masquer un formulaire/buttonAddSection
addSectionActive: element du state qui a l'id du block dans la laquelle le formulaire est visible*/

