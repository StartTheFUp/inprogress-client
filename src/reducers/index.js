export const reducer = (state, action) => {
  if (action.type === 'LOAD_BLOCKS') {
    return {
      ...state,
      blocks: action.blocks
    }
  }
  if (action.type === 'UPDATE_TODOS') {
    //const newBlock = state.blocks
    console.log("state block", state)
    // console.log("action updateTodo", action.indexBlock, action.indexSection, action.indexElement, newBlock[action.indexBlock].sections[action.indexSection].elements[action.indexElement].properties.checked)
    //console.log('action updateTodo', action.idBlock, action.idSection, action.idElement, newBlock[1].sections[0].elements[1].properties.checked)
    // newBlock[action.indexBlock].sections[action.indexSection].elements[action.indexElement].properties.checked = !(newBlock[action.indexBlock].sections[action.indexSection].elements[action.indexElement].properties.checked)
    //newBlock[1].sections[0].elements[1].properties.checked = !(newBlock[1].sections[0].elements[1].properties.checked)
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
  return state
}
