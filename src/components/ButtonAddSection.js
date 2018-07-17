import React, { Component } from 'react'
import '../style/ButtonAddSection.css'
import { Input, Button } from 'semantic-ui-react'

class ButtonAddSection extends Component {
  focusInput () {
    this.refs.textInput.focus()
  }

  render () {
    let title = ''
    return (
      <div className="addSection">
        <div className="show-form-add-section" onClick={() => this.props.showAddSection(this.props.blockId) } style={{display: (this.props.addSectionActive !== this.props.blockId ? 'inline-block' : 'none')}}>
              + Ajouter une section
        </div>
        <div className="add-section-form" style={{display: (this.props.addSectionActive === this.props.blockId ? 'inline-block' : 'none')}}>
          <Input className="add-title-focus" placeholder="titre" name="title" onChange={(event) => (title = event.target.value)} ref='textInput' onPointerOver={() => this.focusInput()} />
          <Button.Group className="button-group-section">
            <Button className="button-add-section" value = "Ajouter la section" onClick={() => this.props.addSection(this.props.blockId, title)}>Ajouter</Button>
            <Button.Or />
            <Button className="close-section-form" onClick = {() => this.props.showAddSection(this.props.blockId) }>Annuler </Button>
          </Button.Group>
        </div>
      </div>
    )
  }
}

export default ButtonAddSection

/*
addSection : action mettant a jour le state avec la nouvelle section
showAddSection : action ki permet d'afficher/masquer un formulaire/buttonAddSection
addSectionActive: element du state qui a l'id du block dans la laquelle le formulaire est visible */
