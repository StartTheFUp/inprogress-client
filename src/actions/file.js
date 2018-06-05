import {store} from '../store.js'

export const actions = {

  loadBlocks: blocks => store.dispatch({ type: 'LOAD_BLOCKS', blocks })

}
