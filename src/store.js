import { createStore } from 'redux'
import {actions} from './action/index.js'
import {reducer} from './reducers/index.js'

const initialState = {
  blocs: []
}

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

fetch('/blocs')
  .then(res => res.json())
  .then(blocs => actions.loadBlocs(blocs))