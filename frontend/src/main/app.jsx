import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Todo from '../todo/todo'
import About from '../about/about'
import { FaCalendarCheck } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default props => (
  <Router>
      <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
           <Link to={'/'}class="navbar-brand" >
            <FaCalendarCheck/> TodoApp
           </Link>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link to={'/'} class="nav-link" >Tarefas <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item active">
                  <Link to={'/about'} class="nav-link">Sobre</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/' component={Todo} />
              <Route path='/about' component={About} />
          </Switch>
      </div>
  </Router>
)
