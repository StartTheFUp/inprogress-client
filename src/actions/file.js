import {store} from '../store.js'

export const actions = {

  loadBlocs: blocs => store.dispatch({ type: 'LOAD_BLOCS', blocs })

}
