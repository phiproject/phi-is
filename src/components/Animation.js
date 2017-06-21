import React, { Component } from 'react'
import { TweenMax, Sine } from 'gsap'
import * as ScrollMagic from 'scrollmagic'
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
    var tween = TweenMax.to("#"+this.id,2,{
      scale: 3,
      // rotation: 180,
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut
    })

    var scene = new ScrollMagic
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
