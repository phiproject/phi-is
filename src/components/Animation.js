import React, { Component } from 'react'
import { TimelineMax, Sine, Quart } from 'gsap'
import Waypoint from 'react-waypoint'
import { randomInt } from '../helpers'

import imgCreate from '../images/create.gif'

function appear(id,id2) {
  let time = randomInt(1,5)
  let scale = randomInt(1,4)
  let rotation = randomInt(0,180)
  return new TimelineMax({ paused: true })
  .from("#"+id2+'-container',1,{
    css: {
      transform: 'translateY(200px)',
      opacity: 0,
    },
    delay: 1,
    ease: Sine.easeInOut
  },0)
  // .to("#"+id,time,{
  //   css: {
  //     transform: 'scale('+scale+') rotate('+rotation+'deg)'
  //   },
  //   // scale: scale,
  //   // rotation: rotation,
  //   repeat: -1,
  //   yoyo: true,
  //   delay: 0,
  //   ease: Quart.easeOut
  // },0)
}

class Animation extends Component {

  componentWillMount() {
    // Setup object id, and a place to store animations
    this.id = this.props.id+'-anim'
    this.anims = {}
  }

  componentDidMount() {
    // Setup animations once the component is actually in scope
    this.anims.enter = appear(this.id, this.props.id)
  }

  waypointEnter = () => {
    this.anims.enter.play()
  }

  waypointLeave = () => {
    this.anims.enter.reverse()//pause(0, true) // resets animation timeline
  }

  render() {
    return (
      <div id={`${this.props.id}-container`} className="Animation">
        {/* <div className="rellax" data-rellax-speed="10" data-rellax-percentage="0.5"> */}
        <Waypoint onEnter={this.waypointEnter} onLeave={this.waypointLeave}>
          <div id={this.id}>
            {/* Animation here */}
            <img src={imgCreate} className="cropImg" alt=""/>
            {/* className="rellax" data-rellax-speed="10" */}
          </div>
        </Waypoint>
        {/* </div> */}
      </div>
    );
  }
}

export default Animation;
