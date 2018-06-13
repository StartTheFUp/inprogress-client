export const reducer = (state, action) => {
  if (action.type === 'LOAD_BLOCKS') {
    return {
      ...state,
      blocks: action.blocks
    }
  }
  if (action.type === 'UPDATE_TODOS') {
    // c onst newBlock = state.blocks   state.blocks.filter(block=>block._id === action.idBlock.filter(block => block.sections.id === action.idSection).filter(block=>block.sections.element.id === action.idElement).filter(block=>block.sections.elements.id === action.idElement)
    console.log('state block', state.blocks.filter(block => block._id === action.idBlock.idBlock).filter(block => block.sections.id === action.idSection))
    // console.log("action updateTodo", action.indexBlock, action.indexSection, action.indexElement, newBlock[action.indexBlock].sections[action.indexSection].elements[action.indexElement].properties.checked)
    console.log('action updateTodo', state.blocks.map(block => block._id), action.idBlock, action.idSection, action.idElement)
    console.log('action idBlock', action.idBlock)
    // newBlock[action.indexBlock].sections[action.indexSection].elements[action.indexElement].properties.checked = !(newBlock[action.indexBlock].sections[action.indexSection].elements[action.indexElement].properties.checked)
    // newBlock[1].sections[0].elements[1].properties.checked = !(newBlock[1].sections[0].elements[1].properties.checked)
    return {
      ...state,
      blocks: state.blocks
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
  return state
}
