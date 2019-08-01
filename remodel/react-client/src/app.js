import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Sidebar from './components/sidebar';
import HomePage from './pages/home';
import MembersPage from './pages/members';
import EventsPage from './pages/events';
import AuditionsPage from './pages/auditions';

class App extends Component {
  render() {
    return (
      <div id='outerWrapper'>
        <Sidebar/>
        <div className='main'>
          <Router>
            <Route name="Home" exact path="/" component={HomePage} />
          </Router>
          <Router>
            <Route name="Events" exact path="/events" component={EventsPage} />
          </Router>
          <Router>
            <Route name="Members" exact path="/members" component={MembersPage} />
          </Router>
          <Router>
            <Route name="Auditions" exact path="/auditions" component={AuditionsPage} />
          </Router>
        </div>
      </div>
    )
  }
}

export default App;