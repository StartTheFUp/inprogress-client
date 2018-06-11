import {store} from '../store.js'

export const actions = {

  loadBlocks: blocks => store.dispatch({ type: 'LOAD_BLOCKS', blocks }),
  updateTodo: (idBlock, idSection, idElement) => store.dispatch({ type: 'UPDATE_TODOS', idBlock, idSection, idElement }),
  loadComments: comments => store.dispatch({ type: 'LOAD_COMMENTS', comments })

}
