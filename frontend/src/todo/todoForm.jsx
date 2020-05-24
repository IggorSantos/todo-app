import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
  const keyHandler = (e) => {
    if(e.key === 'Enter'){
      props.handleAdd()
    }else if (e.key === 'Escape') {
      props.handleClear()
    }
  }


return (
  <form>
   <div class="form-group row">
   <div class="col-sm-10">
    <input id="description" type="text" class="form-control mb-2" placeholder="Adicione uma tarefa"
     onChange={props.handleChange}
     onKeyUp={keyHandler}
     value={props.description}></input>
    </div>
    <div class="col-sm-2">
    <IconButton style='primary' icon="plus-circle-fill"
     d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z"
     onClick={props.handleAdd}>
    </IconButton>
    <IconButton style='secondary' icon="x-circle-fill"
     d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-4.146-3.146a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z"
     onClick={props.handleClear}>
    </IconButton>
    </div>
   </div>
  </form>
 )
}
