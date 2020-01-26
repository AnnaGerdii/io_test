import React from 'react';
import './App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Help } from './Help';
import LoginForm from './Forms/LoginForm';
import PassRestForm from './Forms/PassResetForm';
import ProjectSelection from './Forms/ProjectSelection';

const App = () => (
  <div className="content-container">
    <Help />
    <Switch>
      <Route path="/" exact component={LoginForm} />
      <Route path="/password-reset" component={PassRestForm} />
      <Route path="/n.delyukin" component={ProjectSelection} />
    </Switch>
  </div>
);

export default withRouter(App);
