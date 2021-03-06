import { store } from '../store.js'

const actions = {
  loadBlocks: blocks => ({ type: 'LOAD_BLOCKS', blocks }),
  updateTodo: (idParams) => ({ type: 'UPDATE_TODOS', idParams }),
  loadComments: comments => ({ type: 'LOAD_COMMENTS', comments }),
  loadHeaderData: dataHeader => ({ type: 'LOAD_HEADER', dataHeader }),
  showProcessedTickets: () => ({ type: 'SHOW_PROCESSED_TICKETS' }),
  showUnprocessedTickets: () => ({ type: 'SHOW_UNPROCESSED_TICKETS' }),
  archiveElement: (blockId, sectionId, elementId) => ({ type: 'ARCHIVE_TICKET', blockId, sectionId, elementId }),
  changeDisplayCheck: (params) => ({ type: 'CHANGE_DISPLAY_CHECK', params }),
  showComments: (threadId, activeElement) => ({ type: 'SHOW_COMMENTS', threadId, activeElement }),
  addNewComment: (threadId) => ({type: 'ADD_NEW_COMMENT', threadId}),
  editComment: (threadId, commentId, rawContent) => ({ type: 'EDIT_COMMENT', threadId, commentId, rawContent }),
  changeElementContent: (blockId, sectionId, elementId, rawContent) => ({ type: 'CHANGE_ELEMENT_CONTENT', blockId, sectionId, elementId, rawContent }),
  addSection: (blockId, title) => ({ type: 'ADD_SECTION', blockId, title }),
  showAddSection: (blockId) => ({ type: 'SHOW_ADD_SECTION', blockId }),
  showActiveElement: (activeElement) => ({ type: 'SHOW_ACTIVE_ELEMENT', activeElement }),
  verifyUser: (email, password) => ({ type: 'VERIFY_USER', email, password }),
  addNewElement: (idParams, showComment) => ({ type: 'ADD_NEW_ELEMENT', idParams, showComment }),
  updateModal: (open) => ({ type: 'UPDATE_MODAL', open }),
  saveUser: (name) => ({ type: 'SAVE_USER', name }),
  updateState: (projets) => ({ type: 'UPDATE_STATE', projets }),
  startFadeIn: (idParams) => ({ type: 'FADE_TODOS', idParams }),
  updateLastSaveTime: (status) => ({ type: 'UPDATE_LAST_SAVE_TIME', status }),
  dragDropElements: (elements, blockId, sectionId) => ({ type: 'DRAG_DROP_ELEMENTS', elements, blockId, sectionId })
}

const dispatch = action => (...arg) => store.dispatch(action(...arg))

export const loadBlocks = dispatch(actions.loadBlocks)
export const updateTodo = dispatch(actions.updateTodo)
export const loadComments = dispatch(actions.loadComments)
export const loadHeaderData = dispatch(actions.loadHeaderData)
export const showProcessedTickets = dispatch(actions.showProcessedTickets)
export const showUnprocessedTickets = dispatch(actions.showUnprocessedTickets)
export const changeDisplayCheck = dispatch(actions.changeDisplayCheck)
export const showComments = dispatch(actions.showComments)
export const archiveElement = dispatch(actions.archiveElement)
export const changeElementContent = dispatch(actions.changeElementContent)
export const showActiveElement = dispatch(actions.showActiveElement)
export const addSection = dispatch(actions.addSection)
export const showAddSection = dispatch(actions.showAddSection)
export const verifyUser = dispatch(actions.verifyUser)
export const addNewElement = dispatch(actions.addNewElement)
export const updateModal = dispatch(actions.updateModal)
export const saveUser = dispatch(actions.saveUser)
export const updateState = dispatch(actions.updateState)
export const editComment = dispatch(actions.editComment)
export const addNewComment = dispatch(actions.addNewComment)
export const startFadeIn = dispatch(actions.startFadeIn)
export const updateLastSaveTime = dispatch(actions.updateLastSaveTime)
export const dragDropElements = dispatch(actions.dragDropElements)
/* on demande de l'aide a clement et ca tourne mal
const map = (src, fn) => Object.entries(src)
  .map(fn)
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

const toCamelCase = str => str.toLowerCase().replace(/_([a-z])/g, (_, l) => l.toUpperCase())

const funkyActions = map({
  LOAD_BLOCKS: [ 'blocks' ],
  UPDATE_TODOS: [ 'blockId', 'sectionId', 'elementId' ]
}, ([ type, argNames ]) => [
  toCamelCase(type),
  (...args) => store.dispatch(argNames
    .reduce((acc, key, i) => ({ ...acc, [key]: args[i] }), { type }))
])

map(actions, dispatch)
*/
