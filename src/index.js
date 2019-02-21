import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './NES.css/scss/nes.scss'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Game from './components/organisms/Game'
import NotFound from './components/atoms/NotFound';

const routing = (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/game" component={Game} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);

ReactDOM.render(routing, document.getElementById('root'));
