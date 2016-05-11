'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';
import HomePage                    from './pages/Home/HomePage';
import JoinPage                    from './pages/Join/JoinPage';
import MediaPage                   from './pages/Media/MediaPage';
import SponsorPage                 from './pages/Sponsor/SponsorPage';
import TeamPage                    from './pages/Team/TeamPage';
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
