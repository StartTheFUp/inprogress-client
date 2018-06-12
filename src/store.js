import { createStore } from 'redux'
import {actions} from './actions/file.js'
import {reducer} from './reducers/index.js'

const initialState = {
  blocks: [],
  comments: [],
  dataHeader: {}
}

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

fetch('/blocks')
  .then(res => res.json())
  .then(blocks => actions.loadBlocks(blocks))

fetch('/comments')
  .then(res => res.json())
  .then(comments => actions.loadComments(comments))

fetch('/project/1')
  .then(res => res.json())
  .then(dataHeader => actions.loadHeaderData(dataHeader))
