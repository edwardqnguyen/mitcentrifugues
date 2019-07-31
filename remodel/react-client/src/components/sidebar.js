import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';
 
import React, {Component} from 'react';
 
class Sidebar extends Component {
 
  constructor(props) {
      super(props);

      this.state = {
        isVisible: false,
      };
  }

  render() {
    return (
      <div class="sidenav">
        <nav class="nav">
          <a class="nav-link active" href="#">About Me</a>
          <a class="nav-link" href="#">Resume</a>
          <a class="nav-link" href="#">Music</a>
          <a class="nav-link" href="#">Contact</a>
        </nav>
      </div>
    )
  }
}

export default Sidebar;