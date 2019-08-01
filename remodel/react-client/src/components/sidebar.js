import {Navbar, Nav, NavItem, Button, Glyphicon, Image} from 'react-bootstrap';
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
        <Image src={require('../icons/logo.jpg')} id='logo'/>
        <Nav class="nav">
          <NavItem>
            <a class="nav-link active" href="/">Home</a>
          </NavItem>
          <NavItem>
            <a class="nav-link" href="/members">Members</a>
          </NavItem>
          <NavItem>
            <a class="nav-link" href="/events">Events</a>
          </NavItem>
          <NavItem>
            <a class="nav-link" href="/auditions">Auditions</a>
          </NavItem>
          <NavItem>
            <Image src={require('../icons/email.png')} id='email'/>
          </NavItem>
          <NavItem>
            <Image src={require('../icons/facebook.png')} id='facebook'/>
          </NavItem>
          <NavItem>
            <Image src={require('../icons/youtube.png')} id='youtube'/>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default Sidebar;