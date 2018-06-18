import { store } from '../store.js'

const actions = {
  loadBlocks: blocks => ({ type: 'LOAD_BLOCKS', blocks }),
  updateTodo: (idParams) => ({ type: 'UPDATE_TODOS', idParams }),
  loadComments: comments => ({ type: 'LOAD_COMMENTS', comments }),
  loadHeaderData: dataHeader => ({ type: 'LOAD_HEADER', dataHeader }),
  showProcessedTickets: () => ({ type: 'SHOW_PROCESSED_TICKETS' }),
  showUnprocessedTickets: () => ({ type: 'SHOW_UNPROCESSED_TICKETS' }),
  addNewBillet: (idParams) => ({ type: 'ADD_NEW_BILLET', idParams, billet: { type: 'billet', content: 'Hello', properties: { checked: false, archive: false } } }),
  archiveElement: (blockId, sectionId, elementId) => ({ type: 'ARCHIVE_TICKET', blockId, sectionId, elementId }),
  changeDisplayCheck: (params) => ({ type: 'CHANGE_DISPLAY_CHECK', params }),
  showComments: (threadId) => ({ type: 'SHOW_COMMENTS', threadId }),
  changeElementContent: (blockId, sectionId, elementId, rawContent) => ({ type: 'CHANGE_ELEMENT_CONTENT', blockId, sectionId, elementId, rawContent }),
  showActiveElement: (activeElement) => ({ type: 'SHOW_ACTIVE_ELEMENT', activeElement })
}

const dispatch = action => (...arg) => store.dispatch(action(...arg))

export const loadBlocks = dispatch(actions.loadBlocks)
export const updateTodo = dispatch(actions.updateTodo)
export const loadComments = dispatch(actions.loadComments)
export const loadHeaderData = dispatch(actions.loadHeaderData)
export const showProcessedTickets = dispatch(actions.showProcessedTickets)
export const showUnprocessedTickets = dispatch(actions.showUnprocessedTickets)
export const addNewBillet = dispatch(actions.addNewBillet)
export const changeDisplayCheck = dispatch(actions.changeDisplayCheck)
export const showComments = dispatch(actions.showComments)
export const archiveElement = dispatch(actions.archiveElement)
export const changeElementContent = dispatch(actions.changeElementContent)
export const showActiveElement = dispatch(actions.showActiveElement)
