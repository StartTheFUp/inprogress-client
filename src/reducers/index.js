export const reducer = (state, action) => {
  if (action.type === 'LOAD_BLOCKS') {
    return {
      blocks: action.blocks
    }
  }
  if (action.type === 'UPDATE_TODOS') {
    const newBlock = state.blocks
    // console.log("action updateTodo", action.indexBlock, action.indexSection, action.indexElement, newBlock[action.indexBlock].sections[action.indexSection].elements[action.indexElement].properties.checked)
    console.log('action updateTodo', action.indexBlock, action.indexSection, action.indexElement, newBlock[1].sections[0].elements[1].properties.checked)
    // newBlock[action.indexBlock].sections[action.indexSection].elements[action.indexElement].properties.checked = !(newBlock[action.indexBlock].sections[action.indexSection].elements[action.indexElement].properties.checked)
    newBlock[1].sections[0].elements[1].properties.checked = !(newBlock[1].sections[0].elements[1].properties.checked)
    return {
      blocks: newBlock
    }
  }
  if (action.type === 'LOAD_COMMENTS') {
    return {
      comments: action.comments
    }
  }
  if (action.type === 'LOAD_HEADER') {
    return {
      ...state,
      dataHeader: action.dataHeader
    }
  }
  return state
}
