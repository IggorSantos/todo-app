import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const axios = require('axios').default
const url = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
  constructor(props){
    super(props)
    this.state = {description: ' ',list:[]}
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.refresh()
  }
  refresh(){
    axios.get('http://localhost:3003/api/todos/?sort=-createdAt')
     .then(response => this.setState({...this.state,description:'',list:response.data}))
     .catch(function(error){
      console.log(error)

    })
  }
  handleChange(e){
    this.setState ({... this.state, description: e.target.value})
  }
  handleAdd(){
    const description = this.state.description
    axios.post(url, {description})
    .then(function (response) {
      response => this.refresh();
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  handleRemove(id){
    axios.delete('http://localhost:3003/api/todos/' + id)
    .then(response => this.refresh())
  }
  handleMarkAsDone(todo){
    axios.put('http://localhost:3003/api/todos/' + todo,{...todo,done:true})
    .then(response => this.refresh())
  }
  handleMarkAsPending(todo){
    axios.put('http://localhost:3003/api/todos/' + todo,{...todo,done:false})
    .then(response => this.refresh())
  }
  handleClear(){
    this.refresh()
  }
  render(){
    return(
      <div>
      <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
      <TodoForm description={this.state.description}
       handleAdd={this.handleAdd}
       handleChange={this.handleChange}
       handleClear={this.handleClear}/>
      <TodoList list={this.state.list}
       handleMarkAsDone={this.handleMarkAsDone}
       handleMarkAsPending={this.handleMarkAsPending}
       handleRemove={this.handleRemove}/>
      </div>
    )
  }
}
