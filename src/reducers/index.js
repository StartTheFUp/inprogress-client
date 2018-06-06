export const reducer = (state, action) => {
  if (action.type === 'LOAD_BLOCKS') {
    return {
      blocks: action.blocks
    }
  }
  return state
}
