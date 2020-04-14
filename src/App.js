import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import Home from './components/home';
import ToastContext from './context/ToastContext';
import { Edit } from './components/edit';
import { Create } from './components/create';
import { initializeLocalStorage } from './actions/crud';

class App extends React.Component {
  constructor() {
    super();
    toast.configure();
    const toastContext = React.createContext();
    initializeLocalStorage();
  }

  render() {
    return (
      <Router>
        <ToastContext.Provider value={null}>
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/edit/:id" component={Edit}></Route>
            <Route path="/create" component={Create}></Route>
          </div>
        </ToastContext.Provider>
      </Router>
    );
  }
}

export default App;
