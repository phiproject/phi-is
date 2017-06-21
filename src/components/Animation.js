import React, { Component } from 'react'
import { TweenMax, Sine } from 'gsap'
import * as ScrollMagic from 'scrollmagic'
import { randomInt } from '../helpers'
// import '../vendor/debug.addIndicators'
// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
// import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
// require('//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js')
// require('//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.3/plugins/animation.gsap.min.js')

class Animation extends Component {

  componentWillMount() {
    this.id = this.props.id+'-anim'
  }
  componentDidMount() {
    let time = randomInt(1,5)
    let scale = randomInt(1,4)
    let rotation = randomInt(0,180)
    let tween = TweenMax.to("#"+this.id,time,{
      scale: scale,
      rotation: rotation,
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut
    })

    let scene = new ScrollMagic
    .Scene({triggerElement: "#"+this.props.id, duration: 600})
    .setTween(tween)
    // .addIndicators()
    .addTo(window.controller);
  }

  render() {
    return (
      <div className="Animation">

        <div id={this.id}>
            Animation here
        </div>

      </div>
    );
  }
}

export default Animation;
