import React,{Component} from 'react'
import IconButton from '../template/iconButton'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {add,changeDescription,search,clear} from './todoActions'

class TodoForm extends Component{
  constructor(props){
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }
  componentWillMount(){
    this.props.search()
  }
  keyHandler(e){
    const {add,description,clear} = this.props
    if(e.key === 'Enter'){
      add(description)
    }else if (e.key === 'Escape') {
      clear()
    }
  }
  render(){
    const {add,description} = this.props
    return (
      <form>
       <div class="form-group row">
       <div class="col-sm-10">
        <input id="description" type="text" class="form-control mb-2" placeholder="Adicione uma tarefa"
         onChange={this.props.changeDescription}
         onKeyUp={this.keyHandler}
         value={this.props.description}></input>
        </div>
        <div class="col-sm-2">
        <IconButton style='primary' icon="plus-circle-fill"
         d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z"
         onClick={() => add(description)}>
        </IconButton>
        <IconButton style='secondary' icon="x-circle-fill"
         d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-4.146-3.146a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z"
         onClick={this.props.clear}>
        </IconButton>
        </div>
       </div>
      </form>
    )
  }
}


const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({add,changeDescription,search,clear},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)
