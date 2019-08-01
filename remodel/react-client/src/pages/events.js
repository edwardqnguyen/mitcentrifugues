import React, { Component } from 'react';

class EventsPage extends Component {
  
  render() {
    return (
      <div id="content">
        <div class="event">
          <b>Fall Concert</b>
          <p>
              Friday, 12/7/2018 from 8-9pm <br />
              10-250
          </p>
          <p>We have a fall and spring concert every year. Come join us for funny skits and good music.</p>
        </div>
      </div>
    )
  }
  componentDidMount(){
  }
}

export default EventsPage;