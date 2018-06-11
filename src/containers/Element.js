import { actions } from '../actions/file.js'
import DisplayElement from '../components/Element.js'

const Element = (props) =>
  <DisplayElement {...props} elementAction={actions.updateTodo} />

export default Element
