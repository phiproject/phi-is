import React, { Component } from 'react'
import { TimelineMax, TweenMax, Sine, Quart } from 'gsap'
// import Waypoint from 'react-waypoint'
import { randomInt } from '../helpers'
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'
import anime from 'animejs'
// import 'DrawSVGPlugin'

// import imgCreate from '../images/simulate.svg'
import simBase from '../images/simulate_base.png'
import SimLines from '../images/simulate_lines.svg'

function appear(id,id2) {
  return new TimelineMax()
  .from("#"+id,1,{
    css: {
      transform: 'scale(0.4)',
      // opacity: 0,
    },
    ease: Sine.easeInOut
  },0)
}

function anim_simulate(id, id2) {
  return new TimelineMax()
  .from("#"+id,1,{
    css: {
      transform: 'translateY(100px)',
      // transform: 'scale(0.4)',
      opacity: 0,
    },
    ease: Sine.easeInOut
  },0)
  // .staggerTo('.svgline',1,{
  //   // attr: {
  //   //   // stroke: 'lightgreen',
  //   //   // d:"M0 120 Q360 180 720 120 T 1440 120 V240 H0 Z"
  //   // },
  //   drawSVG: '40% 60%',
  //   ease: Sine.easeInOut
  // })//,1.25)
  // .from('#sim_lines',1,{
  //   css: {
  //     opacity: 0
  //   },
  //   ease: Sine.easeInOut
  // },1)
}

class Animation extends Component {

  componentWillMount() {
    // Setup object id, and a place to store animations
    this.id = this.props.id+'-anim'
    this.container = this.props.id+'-container'
    this.anims = {}
  }

  componentDidMount() {
    // Setup animations once the component is actually in scope

    // const paths = anime.path('.svgline')
    const lines = anime.timeline({
      // direction: 'alternate',
      loop: true
    })

    lines
    .add({
      targets: '#'+this.id+' .svgline',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      // direction: 'alternate',
      // loop: true
    })
    .add({
      targets: '#'+this.id+' .svgline',
      strokeDashoffset: [0, -200],
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      // direction: 'alternate',
      // loop: true
    })

    const tween = anim_simulate(this.id, this.props.id)
    const scene = new ScrollMagic
    .Scene({triggerElement: "#"+this.props.id, duration: 400})
    .setTween(tween)
    // .setPin("#"+this.id)
    // .addIndicators()
    .addTo(this.props.controller)
  }


  render() {
    return (
      <div id={`${this.props.id}-container`} className="Animation">
          <div id={this.id}>

            {/* Animation here */}
            {/* <img src={imgCreate} className="cropImg" alt=""/> */}
            {/* { imgCreate } */}
            <div className="diagram__simulate">
              {/* <img src={simLines} className="diagram-absolute" alt=""/> */}
              <svg viewBox="0 0 745 350" className="diagram-absolute">
                  <g id="Page-1" stroke="none" stroke-width="10" fill="none" fill-rule="evenodd">
                      <g id="Artboard-Copy" stroke="#000000" stroke-width="2.5">
                          <g id="sim_lines" transform="translate(73.000000, 7.000000)">
                              <path className="svgline" d="M0.2,159.9 C21.6,7.6 152.8,5.7 172.7,165.1" id="line8"></path>
                              <path className="svgline" d="M72.5,196 C78.6,86.3 144.3,50 172.7,165.1" id="line7"></path>
                              <path className="svgline" d="M290.4,104.7 C311.8,-67.6 355.1,-12.9 375,167.3" id="line6"></path>
                              <path className="svgline" d="M290.4,104.8 C272.8,19.8 240.5,22.6 224,111.5" id="line5"></path>
                              <path className="svgline" d="M355.6,215.4 C334.6,93.2 264.1,99.7 249.7,233.7" id="line4"></path>
                              <path className="svgline" d="M399.8,115.3 C404.2,62.6 481.1,61.1 486.9,126.6" id="line3"></path>
                              <path className="svgline" d="M551.4,173.8 C546.3,27.4 457.4,-6.1 450.6,175.7" id="line2"></path>
                              <path className="svgline" d="M307.5,120.3 C317.5,-22.8 467.3,-20.3 487,126.5" id="line1"></path>
                          </g>
                      </g>
                  </g>
              </svg>
              <img src={simBase} className="" alt=""/>
            </div>

          </div>
      </div>
    );
  }
}

export default Animation;
