import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './configureStore';

import Home from './pages/home';
import About from './pages/about';
import Contacts from './pages/contacts';
import Header from './common/components/header';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" exact component={Contacts} />
      </Switch>
    </Fragment>
  </ConnectedRouter>
);

export default Routes;