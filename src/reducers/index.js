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

  if (action.type === 'CHANGE_DISPLAY_CHECK') {
    console.log('change check :', action)

    let updateState = []

    // test si idBlock deja present dans showCheck
    let testId = false
    state.showCheck.forEach(object => {
      if (object.idBlock === action.params.idBlock) {
        testId = true
      }
    })

    if (testId) {
      updateState = state.showCheck.map(stateBlock => {
        if (stateBlock.idBlock === action.params.idBlock) {
          return {
            ...stateBlock,
            show: !stateBlock.show
          }
        }
        return stateBlock
      })
    } else updateState = [...state.showCheck, {idBlock: action.params.idBlock, show: true}]

    console.log('CHANGE_DISPLAY_CHECK', updateState)
    return {
      ...state,
      showCheck: updateState
    }
  }
  if (action.type === 'SHOW_COMMENTS') {
    return {
      ...state,
      threadId: action.threadId,
      activeElement: action.activeElement

    }
  }
  return state
}
