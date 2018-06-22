//const path = route => process.env.NODE_ENV === "development" ? route + '.json' : route
const path = route => route

const getBlocks = () => fetch(path('/blocks'))
  .then(res => res.json())

const getComments = () => fetch(path('/comments'))
  .then(res => res.json())

const getProjectById = id => fetch(path(`/projects/${id}`))
  .then(res => res.json())

const saveProject = (blocks) => {
  fetch(path('/blocks', {
    method: 'POST',
    body: JSON.stringify(blocks)
  }))
    .then(res => res.json())
}

export default {
  getBlocks,
  getComments,
  getProjectById,
  saveProject
}
