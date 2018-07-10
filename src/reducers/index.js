import api from '../api.js'

const updateElement = (state, { blockId, sectionId, elementId }, mapper) =>
  state.blocks.map(block => block._id !== blockId
    ? block
    : {
      ...block,
      sections: block.sections.map(section => section.id !== sectionId
        ? section
        : {
          ...section,
          elements: section.elements.map(element => element.id !== elementId
            ? element
            : mapper(element))
        })
    })

export const reducer = (state, action) => {
  if (action.type === 'LOAD_BLOCKS') {
    return {
      ...state,
      blocks: action.blocks
    }
  }

  if (action.type === 'FADE_TODOS') {
    const blockCheck = state.showCheck.find(check => check.blockId === action.idParams.blockId)
    if (blockCheck && blockCheck.show) {
      return state
    }
    console.log(action.type, { blockCheck })
    return {
      ...state,
      blocks: updateElement(state, action.idParams, elt => ({
        ...elt,
        properties: {
          ...elt.properties,
          fadingStart: Date.now()
        }
      }))
    }
  }

  if (action.type === 'UPDATE_TODOS') {
    return {
      ...state,
      blocks: updateElement(state, action.idParams, elt => ({
        ...elt,
        properties: {
          ...elt.properties,
          archive: false,
          checked: !elt.properties.checked
        }
      }))
    }
  }

  if (action.type === 'LOAD_COMMENTS') {
    return {
      ...state,
      comments: action.comments
    }
  }

  if (action.type === 'LOAD_HEADER') {
    return {
      ...state,
      dataHeader: action.dataHeader
    }
  }

  if (action.type === 'SHOW_PROCESSED_TICKETS') {
    return {
      ...state,
      shouldDisplayArchivedTickets: true,
      showComment: false,
      activeElement: ''
    }
  }

  if (action.type === 'SHOW_UNPROCESSED_TICKETS') {
    return {
      ...state,
      shouldDisplayArchivedTickets: false,
      showComment: false,
      activeElement: ''
    }
  }

  if (action.type === 'ADD_NEW_ELEMENT') {
    const randomElementId = Math.random().toString(32).slice(2).padEnd(11, '0').slice(0, 8)
    const randomThreadId = Math.random().toString(32).slice(2).padEnd(11, '0').slice(0, 8)
    const newElement = {
      type: action.idParams.blockType,
      content: '',
      createdAt: new Date(),
      createdBy: state.userName,
      id: randomElementId,
      properties: {
        checked: false,
        archive: false
      },
      threadId: randomThreadId,
      updatedAt: new Date(),
      updatedBy: state.userName
    }
    const newThreadComment = {
      id: newElement.threadId,
      comments: []
    }
    return {
      ...state,
      comments: [...state.comments, newThreadComment],
      showComment: false,
      blocks: [...state.blocks.map((block) => {
        if (block.type !== action.idParams.blockType) {
          return block
        }
        return {
          ...block,
          sections: [...block.sections.map((section) => {
            if (section.id !== action.idParams.sectionId) {
              return section
            }

            return {
              ...section,
              elements: [newElement, ...section.elements]
            }
          })]
        }
      })]
    }
  }

  if (action.type === 'CHANGE_DISPLAY_CHECK') {
    let updateState = []

    // test si blockId deja present dans showCheck
    let testId = false
    state.showCheck.forEach(object => {
      if (object.blockId === action.params.blockId) {
        testId = true
      }
    })

    if (testId) {
      updateState = state.showCheck.map(stateBlock => {
        if (stateBlock.blockId === action.params.blockId) {
          return {
            ...stateBlock,
            show: !stateBlock.show
          }
        }
        return stateBlock
      })
    } else updateState = [...state.showCheck, { blockId: action.params.blockId, show: true }]

    return {
      ...state,
      showCheck: updateState,
      showComment: false,
      activeElement: ''
    }
  }

  if (action.type === 'SHOW_COMMENTS') {
    return {
      ...state,
      threadId: action.threadId,
      showComment: true,
      activeElement: action.activeElement
    }
  }
  if (action.type === 'ADD_NEW_COMMENT') {
    console.log('nouveau commentaire dans ', action.threadId)
    const randomCommentId = Math.random().toString(32).slice(2).padEnd(11, '0').slice(0, 8)
    const newComment = {
      'id': randomCommentId,
      'content': '',
      'createdBy': state.userName,
      'createdAt': new Date(),
      'proprieties': ''
    }
    return {
      ...state,
      comments: [...state.comments.map((threadComment) => {
        if (threadComment.id !== action.threadId) {
          return threadComment
        }
        return {
          ...threadComment,
          comments: [...threadComment.comments, newComment]
        }
      })]
    }
  }
  if (action.type === 'EDIT_COMMENT') {
    return {
      ...state,
      comments: [...state.comments.map((threadComment) => {
        if (threadComment.id !== action.threadId) {
          return threadComment
        }
        return {
          ...threadComment,
          comments: [...threadComment.comments.map(comment => {
            if (comment.id !== action.commentId) {
              return comment
            }
            return {
              ...comment,
              content: action.rawContent,
              updatedAt: new Date(),
              updatedBy: state.userName
            }
          })]
        }
      })]
    }
  }

  if (action.type === 'ARCHIVE_TICKET') {
    const newBlocks = state.blocks.map(block => {
      if (block._id !== action.blockId) {
        return block
      }
      return {
        ...block,
        sections: [
          ...block.sections.map(section => {
            if (section.id !== action.sectionId) {
              return section
            }
            return {
              ...section,
              elements: [
                ...section.elements.map(elt => {
                  if (elt.id !== action.elementId) {
                    return elt
                  }
                  return {
                    ...elt,
                    properties: {
                      archive: !elt.properties.archive,
                      checked: false
                    }
                  }
                })
              ]
            }
          })
        ]
      }
    })
    return {
      ...state,
      blocks: newBlocks
    }
  }

  if (action.type === 'CHANGE_ELEMENT_CONTENT') {
    const newBlocks = state.blocks.map(block => {
      if (block._id !== action.blockId) {
        return block
      }
      return {
        ...block,
        sections: [
          ...block.sections.map(section => {
            if (section.id !== action.sectionId) {
              return section
            }
            return {
              ...section,
              elements: [
                ...section.elements.map(elt => {
                  if (elt.id !== action.elementId) {
                    return elt
                  }
                  return {
                    ...elt,
                    content: action.rawContent,
                    updatedAt: new Date(),
                    updatedBy: state.userName

                  }
                })
              ]
            }
          })
        ]
      }
    })

    return {
      ...state,
      blocks: newBlocks
    }
  }

  if (action.type === 'ADD_SECTION') {
    // generer un id aleatoire
    const randomId = Math.random().toString(32).slice(2).padEnd(11, '0').slice(0, 8)
    const newSection = { id: randomId, title: action.title, elements: [], createdBy: state.userName }
    console.log('ADD section', action, 'state : ', state)
    const newBlocks = state.blocks.map(block => {
      if (block._id !== action.blockId) {
        return block
      }
      return {
        ...block,
        sections: [
          newSection,
          ...block.sections
        ]
      }
    })
    api.updateBlocks(newBlocks)
      .then(res => console.log('updateBlock api :', res))
      .catch(err => console.log('err', err))
    return {
      ...state,
      addSectionActive: '',
      blocks: newBlocks
    }
  }

  if (action.type === 'SHOW_ADD_SECTION') {
    console.log('SHOW AD', state.addSectionActive)
    if (action.blockId === state.addSectionActive) {
      return {
        ...state,
        addSectionActive: ''
      }
    }
    return {
      ...state,
      addSectionActive: action.blockId
    }
  }

  if (action.type === 'SHOW_ACTIVE_ELEMENT') {
    return {
      ...state,
      activeElement: action.activeElement
    }
  }

  if (action.type === 'UPDATE_MODAL') {
    console.log('updateModal', action.open)
    return {
      ...state,
      open: action.open
    }
  }

  if (action.type === 'VERIFY_USER') {
    return {
      ...state,
      userEmail: action.email,
      userPassword: action.password
    }
  }

  if (action.type === 'SAVE_USER') {
    console.log('SAVEUSER', action)
    localStorage.setItem('userName', action.name)
    return {
      ...state,
      userName: action.name,
      open: false
    }
  }

  if (action.type === 'SIGNIN_ADMIN') {
    console.log('SAVEUSER', action)

    let name = state.userName
    let auth = ''
    if (action.cred !== 'user not defined' && action.cred !== 'auth failed' && action.cred !== 'wrong password') {
      localStorage.setItem('userName', action.cred.name)
      localStorage.setItem('token', action.cred.token)
      name = action.cred.name
    } else auth = action.cred

    return {
      ...state,
      authentification: auth,
      userName: name,
      open: false
    }
  }

  if (action.type === 'SAVE_ALL_PROJECT_ADMIN') {
    console.log('SAVE_ADMIN', action)
    return {
      ...state,
      adminProjects: action.infoProjects,
      open: false
    }
  }
  if (action.type === 'DRAG_DROP_ELEMENTS') {
    const newBlocks = state.blocks.map(block => {
      if (block._id !== action.blockId) {
        return block
      }
      return {
        ...block,
        sections: [
          ...block.sections.map(section => {
            if (section.id !== action.sectionId) {
              return section
            }
            return {
              ...section,
              elements: action.elements
            }
          })
        ]
      }
    })
    return {
      ...state,
      blocks: newBlocks
    }
  }

  return state
}
