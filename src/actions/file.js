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
  showComments: (threadId) => ({ type: 'SHOW_COMMENTS', threadId }),
  changeElementContent: (blockId, sectionId, elementId, rawContent) => ({ type: 'CHANGE_ELEMENT_CONTENT', blockId, sectionId, elementId, rawContent }),
  showActiveElement: (activeElement) => ({ type: 'SHOW_ACTIVE_ELEMENT', activeElement }),
  addNewBillet: (idParams) => ({
    type: 'ADD_NEW_BILLET',
    idParams,
    billet: {
      type: 'billet',
      content: 'Veuillez écrire votre billet ici',
      createdAt: '2018-05-28T00:00:00.000Z',
      createdBy: 'userId_1zezghozzge',
      id: 'To be set',
      properties: {
        checked: false,
        archive: false
      },
      threadId: 'commentID_7488950',
      updatedAt: '2018-05-29T00:00:00.000Z',
      updatedBy: 'userId_1zezghozzge'
    }
  })
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
export const addNewBillet = dispatch(actions.addNewBillet)
export function saveProject(blockId) {
  let block = store.getState().blocks.filter((block) => block._id === blockId)
  block = block[0]
  console.log(blockId)
  console.log(block)
  return (
    fetch('/blocks', {
      method: 'POST',
      body: JSON.stringify(block),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    )
  )
}
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
