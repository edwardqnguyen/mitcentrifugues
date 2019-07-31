import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Sidebar from './components/sidebar';
import AboutMePage from './pages/aboutMe';
import MusicPage from './pages/music';
import CredentialsPage from './pages/credentials';
import ContactPage from './pages/contact';

class App extends Component {
  render() {
    return (
      <div id='outerWrapper'>
        <Sidebar/>
        <div className='main'>
          <Router>
            <Route name="aboutMe" exact path="/" component={AboutMePage} />
          </Router>
          <Router>
            <Route name="credentials" exact path="/resume" component={CredentialsPage} />
          </Router>
          <Router>
            <Route name="music" exact path="/music" component={MusicPage} />
          </Router>
          <Router>
            <Route name="contact" exact path="/contact" component={ContactPage} />
          </Router>
        </div>
      </div>
    )
  }
}

export default App;