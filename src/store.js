import { createStore } from 'redux'
import { reducer } from './reducers/index.js'

const initialState = {
  blocks: [],
  comments: [],
  dataHeader: {},
  shouldDisplayArchivedTickets: false,
  showCheck: [],
  threadId: '',
  activeElement: '',
  addSectionActive: '',
  userStatus: false,
  userEmail: '',
  userPassword: '',
  userActiv: []
}

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
