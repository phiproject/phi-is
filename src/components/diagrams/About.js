import React, { Component } from 'react'
import DiagramWaypoint from './DiagramWaypoint'

// Import animation library
import { TimelineMax, Sine, Back } from 'TweenMax'

// Import images
import create_img from '../../images/about/about-create.png'
import simulate_img from '../../images/about/about-simulate.png'
import invest_img from '../../images/about/about-invest.png'
import reorganize_img from '../../images/about/about-reorganize.png'

class About extends Component {

  animate = (diagram_id) => {
    // Setup Timeline
    const tl = new TimelineMax()
    const delayInterval = 0.2
    const speed = 0.8
    const stagger = 0.15

    // Add Timeline animations
    tl.staggerFrom('.about-image',speed,{
      y: '+=60',
      opacity: 0,
      // scale: 0.8,
      ease: Sine.easeOut,
      delay: delayInterval,
    }, stagger*2)
    .from('#about-arrow',0.5,{
      opacity: 0,
      ease: Sine.easeOut,
    }, speed*2)
    .staggerTo('.about-image',speed*3,{
      y: '+=20',
      ease: Sine.easeInOut,
      repeat: -1,
      yoyo: true,
    }, stagger*3)

    // Return the timeline so DiagramWaypoint can trigger it.
    return tl
  }

  hoverOn = (event) => {
    // console.log(this, event.target);
    // new TimelineMax()
    // .to(event.target, 0.3, {
    //   css: { transform: 'scale(1.2)' },
    //   ease: Sine.easeInOut,
    //   // onComplete: utils.options.callback,
    // })
  }

  hoverOff = (event) => {
    // console.log(this, event.target);
    // new TimelineMax()
    // .to(event.target, 0.4, {
    //   css: { transform: 'scale(1)' },
    //   ease: Back.easeInOut,
    //   // onComplete: utils.options.callback,
    // })
  }

  render() {
    return (
      <DiagramWaypoint section={this.props.section} animate={this.animate}>

        <svg className="about-images" viewBox="0 0 1867 1523" version="1.1">
            <defs></defs>
            <g id="About" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="about-svg">

                    <g ref="about-create" onMouseOver={this.hoverOn} onMouseOut={this.hoverOff}>
                      <image className="about-image" id="about-create" x="844" y="7" width="649" height="368" xlinkHref={create_img}></image>
                    </g>

                    <g ref="about-simulate" onMouseOver={this.hoverOn} onMouseOut={this.hoverOff}>
                      <image className="about-image" id="about-simulate" x="1125" y="460" width="737" height="341" xlinkHref={simulate_img}></image>
                    </g>

                    <g ref="about-invest" onMouseOver={this.hoverOn} onMouseOut={this.hoverOff}>
                      <image className="about-image" id="about-invest" x="984" y="886" width="738" height="380" xlinkHref={invest_img}></image>
                    </g>

                    <g ref="about-reorganize" onMouseOver={this.hoverOn} onMouseOut={this.hoverOff}>
                      <image className="about-image" id="about-reorganize" x="206" y="1020" width="681" height="338" xlinkHref={reorganize_img}></image>
                    </g>

                    <g id="about-arrow" transform="translate(206.000000, 87.000000)">
                        <path d="M82.3724698,871.327347 C30.3936453,785.970612 0.51034889,685.572245 0.51034889,578.287347 C0.51034889,272.924082 242.655605,24.2840816 545.473008,13.9542857" id="about-arrow-line" stroke="#000000" strokeWidth="2" strokeDasharray="5"></path>
                        <polygon id="about-arrow-1" fill="#000000" fillRule="nonzero" points="91.790236 860.816327 92.8769013 887.818776 68.7891533 875.133061"></polygon>
                        <polygon id="about-arrow-2" fill="#000000" fillRule="nonzero" points="541.85079 27.7273469 564.851873 13.5918367 541.126347 0.724897959"></polygon>
                    </g>
                </g>
            </g>
        </svg>

      </DiagramWaypoint>
    )
  }
}

export default About;
