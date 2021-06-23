import React from 'react';

import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import EditPage from './pages/edit-page';
import IndexPage from './pages/index-page';
import NewPage from './pages/new-page';

export default class Router extends React.Component {
  render() {
    return(
      <ReactRouter>
        <App>
          <Switch>
            <Route exact path="/" component={IndexPage}></Route>
            <Route exact path="/new" component={NewPage}></Route>
            <Route path="/:id/edit" component={EditPage}></Route>
          </Switch>
        </App>
      </ReactRouter>
    );
  }
}
