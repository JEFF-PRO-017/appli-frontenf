import React from 'react';
import ReactDOM from 'react-dom/client';
import Head from './pages/Head';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './pages/Error';
import Body from './pages/Body';
import ArticleOne from './compoment/article';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <Router>
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>
        <Route path="/:id">
          <ArticleOne />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);
