import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home'
import { Edit } from './components/edit'
import { Create } from './components/create'
import { initializeLocalStorage } from './actions/crud';

class App extends React.Component {
  constructor () {
    super();
    initializeLocalStorage();
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component = {Home}></Route>
          <Route path = "/edit/:id" component = {Edit}></Route>
          <Route path = "/create" component = {Create}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
