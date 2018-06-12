import { store } from '../store.js'

export const actions = {

  loadBlocks: blocks => store.dispatch({ type: 'LOAD_BLOCKS', blocks }),
  updateTodo: (idBlock, idSection, idElement) => store.dispatch({ type: 'UPDATE_TODOS', idBlock, idSection, idElement }),
  loadComments: comments => store.dispatch({ type: 'LOAD_COMMENTS', comments }),
  loadHeaderData: dataHeader => store.dispatch({ type: 'LOAD_HEADER', dataHeader }),
  showProcessedTickets: () => store.dispatch({ type: 'SHOW_PROCESSED_TICKETS' }),
  showUnprocessedTickets: () => store.dispatch({ type: 'SHOW_UNPROCESSED_TICKETS' })
}
