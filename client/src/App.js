import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Panel.js';
import CreateUrl from './components/CreateUrl.js';
import UniqueUrl from './components/UniqueUrl';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
        path='/home'
        component={Home}
        />
        <Route 
        path='/url/add'
        component={CreateUrl}
        />
       <Route
        path='/url/:_id'
        render= { ({match}) => <UniqueUrl _id={match.params._id} />}
        />
        <Redirect 
        to='/home'
        />
      </Switch>
    </div>
  );
}

export default App;
