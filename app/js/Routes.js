'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';
import HomePage                    from './pages/HomePage';
import JoinPage                    from './pages/JoinPage';
import MediaPage                   from './pages/MediaPage';
import SponsorPage                 from './pages/SponsorPage';
import TeamPage                    from './pages/TeamPage';
import NotFoundPage                from './pages/NotFoundPage';

//Creates the routing of the web page
export default (
  <Router history={CreateBrowserHistory()}>
    <Route path="/" component={App}>

      <IndexRoute component={HomePage} />

      <Route path="/" component={HomePage} />
      <Route path="join" component={JoinPage} />
      <Route path="media" component={MediaPage} />
      <Route path="sponsor" component={SponsorPage} />
      <Route path="team" component={TeamPage} />

      <Route path="*" component={NotFoundPage} />

    </Route>
  </Router>
);
