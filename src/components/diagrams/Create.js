import React, { Component } from 'react'
import Diagram from './Diagram'

import anime from 'animejs'
import image from '../../images/simulate_base.png'

class Create extends Component {
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

        <svg viewBox="0 0 745 350" className="diagram-absolute">
            <g id="Page-1" stroke="none" stroke-width="10" fill="none" fill-rule="evenodd">
                <g id="Artboard-Copy" stroke="#000000" stroke-width="2.5">
                    <g id="simulate-lines" transform="translate(73.000000, 7.000000)">
                        <path className="simulate-line" d="M0.2,159.9 C21.6,7.6 152.8,5.7 172.7,165.1" id="line8"></path>
                        <path className="simulate-line" d="M72.5,196 C78.6,86.3 144.3,50 172.7,165.1" id="line7"></path>
                        <path className="simulate-line" d="M290.4,104.7 C311.8,-67.6 355.1,-12.9 375,167.3" id="line6"></path>
                        <path className="simulate-line" d="M290.4,104.8 C272.8,19.8 240.5,22.6 224,111.5" id="line5"></path>
                        <path className="simulate-line" d="M355.6,215.4 C334.6,93.2 264.1,99.7 249.7,233.7" id="line4"></path>
                        <path className="simulate-line" d="M399.8,115.3 C404.2,62.6 481.1,61.1 486.9,126.6" id="line3"></path>
                        <path className="simulate-line" d="M551.4,173.8 C546.3,27.4 457.4,-6.1 450.6,175.7" id="line2"></path>
                        <path className="simulate-line" d="M307.5,120.3 C317.5,-22.8 467.3,-20.3 487,126.5" id="line1"></path>
                    </g>
                </g>
            </g>
        </svg>

        <img src={image} id="simulate-img" alt=""/>

      </Diagram>
    )
  }
}

export default Create;