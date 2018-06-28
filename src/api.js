const path = route => process.env.REACT_APP_MOCKS ? route + '.json' : route

console.log('process env', process.env)

const getBlocks = () => fetch(path('/blocks'))
  .then(res => res.json())

const getComments = () => fetch(path('/comments'))
  .then(res => res.json())

const getProjectById = id => fetch(path(`/projects/${id}`))
  .then(res => res.json())

const updateBlocks = blocks => fetch(path(`/blocks`), {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },

  body: JSON.stringify(blocks)
})

const updateComments = comments => fetch(path(`/comments`), {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },

  body: JSON.stringify(comments)
})

export default {
  getBlocks,
  getComments,
  getProjectById,
  updateBlocks,
  updateComments
}
