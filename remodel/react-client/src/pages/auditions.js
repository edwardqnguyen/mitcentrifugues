import React, { Component } from 'react';

class AuditionsPage extends Component {
  
  render() {
    return (
      <div id="content">
        <h1>Auditions</h1>
        <b>Where/when are auditions?</b>
        <p>This fall, auditions are Friday, 2018-08-31 from 5:30pm to 9:00pm and Saturday, 2018-09-01 from 10:00am to 5:00pm in 4-144. Callbacks will be the next day at a time that's convenient for the most auditionees.</p>
        <br />

        <b>How do I sign up?</b>
        <p>To sign up for an audition slot, stop by our booth at the Activities Midway, or <a href="mailto:centrifugues-exec@mit.edu">email us</a>. Walk-ins are also welcome. We look forward to hearing you sing!</p>
        <br />
        <b>When can I audition?</b>
        <p>We hold auditions for new members every fall semester and sometimes in the spring. We encourage anyone who is MIT-affiliated to audition, no musical training needed. </p>
        <br />

        <b>What happens at an audition?</b>
        <p>An audition is 10-15 minutes long and pretty relaxed. All you have to do is prepare a verse and chorus from any song you like. We can give you a starting note. In addition to your solo, we'll do some simple exercises to get a feel for your voice, such as range testing and pitch matching. We'll let you know how we'll follow up about audition callbacks.</p>
        <br />

        <b>How many people get in?</b>
        <p>The number of people we take depends on our current membership and the talents of those who audition.</p>
        <br />
      </div>
    )
  }
  componentDidMount(){
  }
}

export default AuditionsPage;