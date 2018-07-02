import { createStore, applyMiddleware } from 'redux'
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
  statusUser: true,
  userEmail: '',
  userPassword: '',
  userActiv: [],
  open: true,
  userName: '',
  reponse: [],
  projectsAdmin: []
}

export const store = createStore(reducer, initialState,
  applyMiddleware(store => next => action => {
    next(action)
    console.log('FROM MIDDLEWARE', action.type)
    if (action.type === 'FADE_TODOS') {
      const { fadingStart } = store.getState().blocks.find(block => block._id === action.idParams.blockId)
        .sections.find(section => section.id === action.idParams.sectionId)
        .elements.find(element => element.id === action.idParams.elementId)
        .properties

      const delay = Date.now() - fadingStart < 2000 ? 2000 : 0
      setTimeout(() => store.dispatch({ ...action, type: 'UPDATE_TODOS' }), delay)
    }
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
