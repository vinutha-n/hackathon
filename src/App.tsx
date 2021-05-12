

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CourseList from './components/courseList';
import CertifiedUsers from './components/certifiedUsers';
import Login from './Pages/Login/Login';
import Sidebar from './components/Sidebar';
import Home from './components/tutor/Home/Home';
import './App.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/Home" component={Home} exact/>
            <Route path="/courseList" component={CourseList}  />
            <Route path="/certifiedusers" component={CertifiedUsers} />
        </Switch>
      </main>
  </BrowserRouter>
  );
}

export default App;
