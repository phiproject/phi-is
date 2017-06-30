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
                    <g id="about-arrow" transform="translate(406.000000, 87.000000)">
                        <path d="M82.3724698,871.327347 C30.3936453,785.970612 0.51034889,685.572245 0.51034889,578.287347 C0.51034889,272.924082 242.655605,24.2840816 545.473008,13.9542857" id="Shape" stroke="#000000" strokeWidth="2"></path>
                        <polygon id="Shape" fill="#000000" fill-rule="nonzero" points="91.790236 860.816327 92.8769013 887.818776 68.7891533 875.133061"></polygon>
                        <polygon id="Shape" fill="#000000" fill-rule="nonzero" points="541.85079 27.7273469 564.851873 13.5918367 541.126347 0.724897959"></polygon>
                    </g>
                </g>
            </g>
        </svg>

      </Diagram>
    )
  }
}

export default About;
