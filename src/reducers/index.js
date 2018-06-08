export const reducer = (state, action) => {
  if (action.type === 'LOAD_BLOCKS') {
    return {
      blocks: action.blocks
    }
  }
  if (action.type === 'LOAD_COMMENTS') {
    return {
      comments: action.comments
    }
  }
  return state
}
