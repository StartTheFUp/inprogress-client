const { hostname } = window.location

export const apiHost = hostname === '127.0.0.1' || hostname === 'localhost'
  ? 'http://localhost:5000'
  : process.env.REACT_APP_API_URL

const path = route => `${apiHost}${route}` + (process.env.REACT_APP_MOCKS ? '.json' : '')

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
