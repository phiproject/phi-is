import React, { Component } from 'react'
import Diagram from './Diagram'

import anime from 'animejs'

class Reorganize extends Component {
  animate = (diagram_id) => {
    // Setup Timeline
    const tl = anime.timeline({ loop: true })

    // Add Timeline animations
    tl
    .add({
      targets: '#'+diagram_id+' .simulate-line',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
    })
    .add({
      targets: '#'+diagram_id+' .simulate-line',
      strokeDashoffset: [0, -200],
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
    })



    return tl
  }

  render() {
    return (
      <Diagram section={this.props.section} animate={this.animate}>



      </Diagram>
    )
  }
}

export default Reorganize;
