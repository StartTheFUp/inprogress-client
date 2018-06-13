import { store } from '../store.js'

const actions = {
  loadBlocks: blocks => ({ type: 'LOAD_BLOCKS', blocks }),
  updateTodo: (idBlock, idSection, idElement) => ({ type: 'UPDATE_TODOS', idBlock, idSection, idElement }),
  loadComments: comments => ({ type: 'LOAD_COMMENTS', comments }),
  loadHeaderData: dataHeader => ({ type: 'LOAD_HEADER', dataHeader }),
  showProcessedTickets: () => ({ type: 'SHOW_PROCESSED_TICKETS' }),
  showUnprocessedTickets: () => ({ type: 'SHOW_UNPROCESSED_TICKETS' })
}

const dispatch = action => (...arg) => store.dispatch(action(...arg))

export const loadBlocks = dispatch(actions.loadBlocks)
export const updateTodo = dispatch(actions.updateTodo)
export const loadComments = dispatch(actions.loadComments)
export const loadHeaderData = dispatch(actions.loadHeaderData)
export const showProcessedTickets = dispatch(actions.showProcessedTickets)
export const showUnprocessedTickets = dispatch(actions.showUnprocessedTickets)

/* on demande de l'aide a clement et ca tourne mal
const map = (src, fn) => Object.entries(src)
  .map(fn)
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

const toCamelCase = str => str.toLowerCase().replace(/_([a-z])/g, (_, l) => l.toUpperCase())

const funkyActions = map({
  LOAD_BLOCKS: [ 'blocks' ],
  UPDATE_TODOS: [ 'idBlock', 'idSection', 'idElement' ]
}, ([ type, argNames ]) => [
  toCamelCase(type),
  (...args) => store.dispatch(argNames
    .reduce((acc, key, i) => ({ ...acc, [key]: args[i] }), { type }))
])

map(actions, dispatch)
*/
