 const getBlocks = () => fetch('/blocks')
  .then(res => res.json())

 const getComments = () => fetch('/comments')
  .then(res => res.json())

 const getProjectById = id => fetch(`/project/${id}`)
  .then(res => res.json())
 export default {
   getBlocks,
   getComments,
   getProjectById
 }
