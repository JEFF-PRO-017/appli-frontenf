import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from './pages/Head';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Read from './routes/read';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <Router>
      <Switch>
      <Route exact path="/">
        <Read />
      </Route>
      <Route>
        <Error />
      </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);
