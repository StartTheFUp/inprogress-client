export const loadBlocks = blocks => ({ type: 'LOAD_BLOCKS', blocks })

export const updateTodo = idParams => ({ type: 'UPDATE_TODOS', idParams })

export const loadComments = comments => ({ type: 'LOAD_COMMENTS', comments })

export const loadHeaderData = dataHeader => ({ type: 'LOAD_HEADER', dataHeader })

export const showProcessedTickets = () => ({ type: 'SHOW_PROCESSED_TICKETS' })

export const showUnprocessedTickets = () => ({ type: 'SHOW_UNPROCESSED_TICKETS' })

export const addNewBillet = (idParams, content = '') => ({
  type: 'ADD_NEW_BILLET',
  idParams,
  billet: { type: 'billet', content, properties: { checked: false, archive: false } }
})

export const archiveElement = (blockId, sectionId, elementId) => ({
  type: 'ARCHIVE_TICKET',
  blockId,
  sectionId,
  elementId
})

export const changeDisplayCheck = params => ({ type: 'CHANGE_DISPLAY_CHECK', params })

export const showComments = threadId => ({ type: 'SHOW_COMMENTS', threadId })

export const changeElementContent = (blockId, sectionId, elementId, rawContent) => ({
  type: 'CHANGE_ELEMENT_CONTENT',
  blockId,
  sectionId,
  elementId,
  rawContent
})

export const showActiveElement = activeElement => ({ type: 'SHOW_ACTIVE_ELEMENT', activeElement })
