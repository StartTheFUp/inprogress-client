import { store } from '../store.js'

export const actions = {

  loadBlocks: blocks => store.dispatch({ type: 'LOAD_BLOCKS', blocks }),
  updateTodo: (indexBlock, indexSection, indexElement) => store.dispatch({ type: 'UPDATE_TODOS', indexBlock, indexSection, indexElement }),
  loadComments: comments => store.dispatch({ type: 'LOAD_COMMENTS', comments }),
  loadHeaderData: dataHeader => store.dispatch({ type: 'LOAD_HEADER', dataHeader })
}
