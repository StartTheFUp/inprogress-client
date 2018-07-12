const path = route => process.env.REACT_APP_MOCKS ? route + '.json' : route

console.log('process env', process.env)

const getBlocks = id => fetch(path(`/blocks/${id}`))
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

const userMatch = (user) => fetch(path(`/signin`), {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'content-type': 'application/json'
  },
  body: JSON.stringify(user)
})

const adminProjects = (token) => fetch(path(`/adminProjects`), {
  headers: {
    Authorization: `Bearer ${token}`
  }

})

const getClientsProject = projectId => fetch(path(`/clients/${projectId}`))
  .then(res => res.json())
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
  userMatch,
  adminProjects,
  getClientsProject,
  updateComments
}
