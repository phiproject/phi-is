import React, { Component } from 'react'
import { TimelineMax, TweenMax, Sine, Quart } from 'gsap'
// import Waypoint from 'react-waypoint'
import { randomInt } from '../helpers'
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'

import imgCreate from '../images/create.gif'

function appear(id,id2) {
  let scale = 2
  let rotation = 180
  let time = 2
  return new TweenMax
  .from("#"+id2+'-container',1,{
    css: {
      // transform: 'translateX(400px)',
      opacity: 0,
      // backgroundColor: '#000'
    },
    paused: true,
    ease: Sine.easeInOut
  })
  // .to("#"+id,time,{
  //   css: {
  //     transform: 'scale('+scale+') rotate('+rotation+'deg)'
  //   },
  //   // repeat: -1,
  //   // yoyo: true,
  //   // delay: 0,
  //   // paused: true,
  //   ease: Quart.easeOut
  // })
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

    const tween = new TimelineMax()
    .from("#"+this.id,1,{
      css: {
        transform: 'scale(0.4)',
        // opacity: 0,
      },
      ease: Sine.easeInOut
    },0)
    // .to("#"+this.id,1,{
    //   css: {
    //     transform: 'scale(3)',
    //   },
    //   ease: Sine.easeInOut
    // },0.25)

    const scene = new ScrollMagic
    .Scene({triggerElement: "#"+this.props.id, duration: 400})
    .setTween(tween)
    // .setPin("#"+this.id)
    .addIndicators()
    .addTo(this.props.controller)
  }


  render() {
    return (
      <div id={`${this.props.id}-container`} className="Animation">
        {/* <div className="rellax" data-rellax-speed="10" data-rellax-percentage="0.5"> */}
        {/* <Waypoint onEnter={this.waypointEnter} onLeave={this.waypointLeave}> */}
          <div id={this.id}>
            {/* Animation here */}
            <img src={imgCreate} className="cropImg" alt=""/>
            {/* className="rellax" data-rellax-speed="10" */}
          </div>
        {/* </Waypoint> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Animation;
