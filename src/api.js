<<<<<<< HEAD
const path = route => process.env.REACT_APP_MOCKS ? route + '.json' : route

console.log('process env', process.env)
=======
// const path = route => process.env.NODE_ENV === "development" ? route + '.json' : route
const path = route => route
>>>>>>> origin/addBillet4

const getBlocks = () => fetch(path('/blocks'))
  .then(res => res.json())

const getComments = () => fetch(path('/comments'))
  .then(res => res.json())

const getProjectById = id => fetch(path(`/projects/${id}`))
  .then(res => res.json())

<<<<<<< HEAD
const updateBlocks = blocks => fetch(path(`/blocks`), {
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'content-type': 'application/json'
  },
  body: JSON.stringify(blocks)
})
=======
const saveProject = (blocks) => {
  fetch(path('/blocks', {
    method: 'POST',
    body: JSON.stringify(blocks)
  }))
    .then(res => res.json())
}
>>>>>>> origin/addBillet4

export default {
  getBlocks,
  getComments,
  getProjectById,
<<<<<<< HEAD
  updateBlocks
=======
  saveProject
>>>>>>> origin/addBillet4
}
