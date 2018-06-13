export const reducer = (state, action) => {
  if (action.type === 'LOAD_BLOCKS') {
    return {
      ...state,
      blocks: action.blocks
    }
  }
  if (action.type === 'UPDATE_TODOS') {
    const newBlocks = state.blocks.map(block => {
      if (block._id !== action.idParams.idBlock) {
        return block
      }
      return {
        ...block,
        sections: [
          ...block.sections.map(section => {
            if (section.id !== action.idParams.idSection) {
              return section
            }
            return {
              ...section,
              elements: [
                ...section.elements.map(elt => {
                  if (elt.id !== action.idParams.idElement) {
                    return elt
                  }
                  return {
                    ...elt,
                    properties: {
                      archive: false,
                      checked: !elt.properties.checked
                    }
                  }
                })
              ]
            }
          })
        ]
      }
    })
    console.log(action.idParams, 'newBlocks', newBlocks)
    return {
      ...state,
      blocks: newBlocks
    }
  }

  if (action.type === 'LOAD_COMMENTS') {
    return {
      ...state,
      comments: action.comments
    }
  }
  if (action.type === 'LOAD_HEADER') {
    return {
      ...state,
      dataHeader: action.dataHeader
    }
  }
  if (action.type === 'SHOW_PROCESSED_TICKETS') {
    return {
      ...state,
      processedTickets: true
    }
  }
  if (action.type === 'SHOW_UNPROCESSED_TICKETS') {
    return {
      ...state,
      processedTickets: false
    }
  }

  if (action.type === 'ADD_NEW_BILLET') {
    return {
      ...state,
      blocks: [...state.blocks.map((block) => {
        if (block.type !== 'billets') {
          return block
        }
        return {
          ...block,
          sections: [...block.sections.map((section) => {
            if (section.id !== action.idParams.idSection) {
              return section
            }

            return {
              ...section,
              elements: [...section.elements, action.billet]
            }
          })]
        }
      })]
    }
  }
  return state
}
