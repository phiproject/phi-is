import React, { Component } from 'react'
import { TimelineMax, Sine } from 'gsap'
import { randomInt } from '../helpers'
import Waypoint from 'react-waypoint'

function appear(id) {
  let time = randomInt(1,5)
  let scale = randomInt(1,4)
  let rotation = randomInt(0,180)
  return new TimelineMax({ paused: true })
  .to("#"+id,time,{
    scale: scale,
    rotation: rotation,
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut
  })
}

class Animation extends Component {

  componentWillMount() {
    this.id = this.props.id+'-anim'
    this.anims = {}
  }

  componentDidMount() {
    this.anims.enter = appear(this.id)
  }

  waypointEnter = () => {
    this.anims.enter.play()
  }

  waypointLeave = () => {
    this.anims.enter.stop()
  }

  render() {
    return (
      <div className="Animation">
        <Waypoint onEnter={this.waypointEnter} onLeave={this.waypointLeave} >
          <div id={this.id}>
            Animation here
          </div>
        </Waypoint>
      </div>
    );
  }
}

export default Animation;
