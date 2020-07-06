import React from 'react'
import IconButton from '../template/iconButton'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {markAsDone,markAsPending,remove} from './todoActions'

const Col = styled.td`
  text-decoration: ${props => props.feito ? "line-through":""};
  color: ${props => props.feito ? "grey":""};
`;

const TodoList = props =>{
  const renderRows = () => {
    const list = props.list || []
    const feito = ''
    return list.map(todo => (
      <tr key={todo._id}>
        <Col feito={todo.done ? '1':''}>{todo.description}</Col>
        <td>
        <IconButton style='success' icon="check" hide={todo.done}
         d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
         onClick={() => props.markAsDone(todo)}>
        </IconButton>
        <IconButton style='warning' icon="arrow-counterclockwise" hide={!todo.done}
         d="M12.83 6.706a5 5 0 00-7.103-3.16.5.5 0 11-.454-.892A6 6 0 112.545 5.5a.5.5 0 11.91.417 5 5 0 109.375.789z"
         onClick={() => props.markAsPending(todo)}>
        </IconButton>
        <IconButton style='danger' icon="trash-fill"  hide={!todo.done}
         d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7z"
         onClick={() => props.remove(todo)}>
        </IconButton>
         </td>
      </tr>
    ))
  }
  return(
    <table class='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
       {renderRows()}
      </tbody>
   </table>
  )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone,markAsPending,remove},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
