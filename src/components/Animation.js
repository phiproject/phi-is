import React, { Component } from 'react'
import Settings from '../settings'

import { TimelineMax, Quart } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'

import Simulate from './diagrams/Simulate'


function appear(id, section) {
  return new TimelineMax()
  .from("#"+id,1,{
    css: {
      transform: 'translateY(100px)',
      // transform: 'scale(0.4)',
      opacity: 0,
    },
    ease: Quart.easeInOut
  },0)
}

class Animation extends Component {

  componentWillMount() {
    // Setup object id, and a place to store animations
    this.id = this.props.id+'-anim'
    this.container = this.props.id+'-container'
  }

  componentDidMount() {
    // Setup animations once the component is actually in scope

    if (Settings.animation.on && Settings.animation.scroll) {
      const tween = appear(this.id, this.props.id)
      const scene = new ScrollMagic
      .Scene({triggerElement: "#"+this.props.id, duration: 400})
      .setTween(tween)
      // .setPin("#"+this.id)
      .addTo(this.props.controller)

      if (Settings.animation.scroll_indicators) {
        scene.addIndicators()
      }
    }

  }


  render() {
    return (
      <div id={`${this.props.id}-container`} className="Animation">
          <div id={this.id}>

            {/* Animation here */}
            {/* <img src={imgCreate} className="cropImg" alt=""/> */}
            {/* { imgCreate } */}

            <Simulate id={this.props.id} />

          </div>
      </div>
    );
  }
}

export default Animation;
