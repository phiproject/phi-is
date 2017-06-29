import React, { Component } from 'react'
import Diagram from './Diagram'

import { TimelineMax, Sine } from 'gsap'

import create_img from '../../images/about-create.png'
import simulate_img from '../../images/about-simulate.png'
import invest_img from '../../images/about-invest.png'
import reorganize_img from '../../images/about-reorganize.png'

class About extends Component {

  animate = (diagram_id) => {
    // Setup Timeline
    const tl = new TimelineMax()
    const delayInterval = 0.2
    const speed = 0.8
    const stagger = 0.15

    // Add Timeline animations
    tl.staggerFrom('.about-image',speed,{
      // bezier:{
      //   type:'quadratic',
      //   values:[
      //     /*p1*/{x:'+=0', y:'+=0'},{x:'+=100', y:'+=0'},{x:'+=100', y:'+=100'},
      //     /*p2*/{x:'+=100', y:'+=200'},{x:'+=0', y:'+=200'},
      //     /*p3*/{x:'-=100', y:'+=200'},{x:'-=100', y:'+=100'},
      //     /*p4*/{x:'-=100', y:'+=0'},{x:'+=0', y:'+=0'}
      //   ]
      // }/*bezier end*/,
      y: '+=60',
      opacity: 0,
      // scale: 0.8,
      ease: Sine.easeOut,
      delay: delayInterval,
   }, stagger)
   .staggerTo('.about-image',speed*3,{
      y: '+=20',
      ease: Sine.easeInOut,
      repeat: -1,
      yoyo: true,
   }, stagger*3)

    // tl.to('.about-image', 2, {
    //   bezier:{
    //     type:'quadratic',
    //     values:[
    //       /*p1*/{x:0, y:0},{x:100, y:0},{x:100, y:100},
    //       /*p2*/{x:100, y:200},{x:0, y:200},
    //       /*p3*/{x:-100, y:200},{x:-100, y:100},
    //       /*p4*/{x:-100, y:0},{x:0, y:0}
    //     ]
    //   }/*bezier end*/,
    //   ease:Sine.easeNone,
    //   delay: 0.2,
    // }, stagger);

    return tl
  }

  render() {
    return (
      <Diagram section={this.props.section} animate={this.animate}>

        <svg className="about-images" viewBox="0 0 2067 1523" version="1.1">
            <defs></defs>
            <g id="About" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="about-svg">
                    <image className="about-image" id="about-create" x="1044" y="7" width="649" height="368" xlinkHref={create_img}></image>
                    <image className="about-image" id="about-simulate" x="1325" y="460" width="737" height="341" xlinkHref={simulate_img}></image>
                    <image className="about-image" id="about-invest" x="1184" y="886" width="738" height="380" xlinkHref={invest_img}></image>
                    <image className="about-image" id="about-reorganize" x="406" y="1020" width="681" height="338" xlinkHref={reorganize_img}></image>
                </g>
            </g>
        </svg>

      </Diagram>
    )
  }
}

export default About;
