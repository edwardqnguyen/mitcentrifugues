import React, { Component } from 'react';

class HomePage extends Component {
  
  render() {
    return (
      <div id="content">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLEqH21Y1c7k_5tvgOwsY8krqun6wAqGsu&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <br/>
        <p>The Centrifugues are a co-ed MIT a cappella group. We specialize in musical mashups, and we sing pop, rock, musicals, and more. If you have a mashup idea, feel free to <a href="mailto:you-guys-i-had-a-mashup-idea@mit.edu" target="_blank">email us</a>.</p>  
      </div>
    )
  }
  componentDidMount(){
  }
}

export default HomePage;