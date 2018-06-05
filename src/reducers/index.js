export const reducer = (state, action) => {
  if (action.type === 'LOAD_BLOCS') {
    return {
      blocs: action.blocs
    }
  }
  return state
}
