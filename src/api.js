const path = route => process.env.REACT_APP_MOCKS ? route + '.json' : route

console.log("process env", process.env )

const getBlocks = () => fetch(path('/blocks'))
  .then(res => res.json())

const getComments = () => fetch(path('/comments'))
  .then(res => res.json())

const getProjectById = id => fetch(path(`/projects/${id}`))
  .then(res => res.json())

export default {
  getBlocks,
  getComments,
  getProjectById
}
