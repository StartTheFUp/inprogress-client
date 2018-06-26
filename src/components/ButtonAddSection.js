import React from 'react'
import '../style/ButtonAddSection.css'
import { Input, Button } from 'semantic-ui-react'

const ButtonAddSection = ({ blockId, showAddSection, addSection, addSectionActive }) => {
  // console.log('BUTTON SECTION : ', addSectionActive, blockId)
  // probleme si on ajout une section et qu'on veut en ajouter une autre sans changer le nom

  let title = ''

  return (
    <div className="addSection">
      <div className="show-form-add-section" onClick={() => showAddSection(blockId)} style={{display: (addSectionActive !== blockId ? 'block' : 'none')}}>
          ajouter une section
      </div>
      <div className="add-section-form" style={{display: (addSectionActive === blockId ? 'block' : 'none')}}>
        <Input className="add-title-form" placeholder="titre" name="title" onChange={(event) => (title = event.target.value)} />
        <Button.Group className="button-group-section">
          <Button className="button-add-section" value = "Ajouter la section" onClick={() => addSection(blockId, title)}>Ajouter</Button>
          <Button.Or />
          <Button className="close-section-form" onClick = {() => showAddSection(blockId) }>Annuler </Button>
        </Button.Group>
      </div>
    </div>
  )
}

export default ButtonAddSection

/*
addSection : action mettant a jour le state avec la nouvelle section
showAddSection : action ki permet d'afficher/masquer un formulaire/buttonAddSection
addSectionActive: element du state qui a l'id du block dans la laquelle le formulaire est visible */
