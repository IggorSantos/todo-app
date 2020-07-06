const axios = require('axios').default

export const changeDescription = (event) => ({
  type:'DESCRIPTION_CHANGED',
  payload:event.target.value
})

export const search = () => {
  const request = axios.get('http://localhost:3003/api/todos/?sort=-createdAt')
  return {
    type:'TODO_SEARCHED',
    payload:request
  }
}


export const add = (description) => {
  return dispatch => {
    axios.post('http://localhost:3003/api/todos/',{description})
         .then(clear())
         .then(resp => dispatch(search()))
  }
}

export const markAsDone = (todo) => {
  return dispatch => {
    axios.put('http://localhost:3003/api/todos/' + todo._id,{...todo,done:true})
         .then(resp => dispatch(search()))
  }
}

export const markAsPending = (todo) => {
  return dispatch => {
    axios.put('http://localhost:3003/api/todos/' + todo._id,{...todo,done:false})
         .then(resp => dispatch(search()))
  }
}

export const remove = (todo) => {
  return dispatch => {
    axios.delete('http://localhost:3003/api/todos/' + todo._id)
         .then(resp => dispatch(search()))
  }
}

export const clear = () => {
  return [{type:'TODO_CLEAR'}]
}
