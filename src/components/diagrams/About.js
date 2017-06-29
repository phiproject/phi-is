import React, { Component } from 'react'
import Diagram from './Diagram'

import { TimelineMax, Sine } from 'gsap'

import createImg from '../../images/about-create.png'
import simulateImg from '../../images/about-simulate.png'
import investImg from '../../images/about-invest.png'
import reorganizeImg from '../../images/about-reorganize.png'

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
      y: '+=50',
      opacity: 0,
      // scale: 0.8,
      ease: Sine.easeOut,
      delay: delayInterval,
   }, stagger)
   .staggerTo('.about-image',speed*3,{
      y: '+=15',
      ease: Sine.easeInOut,
      repeat: -1,
      yoyo: true,
   }, stagger*2)

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

        <div className="about-images">
          <div className="diagram-absolute"><img className="about-image about-create" src={createImg} alt=""/></div>
          <div className="diagram-absolute"><img className="about-image about-simulate" src={simulateImg} alt=""/></div>
          <div className="diagram-absolute"><img className="about-image about-invest" src={investImg} alt=""/></div>
          <div className="diagram-absolute"><img className="about-image about-reorganize" src={reorganizeImg} alt=""/></div>
        </div>

      </Diagram>
    )
  }
}

export default About;
