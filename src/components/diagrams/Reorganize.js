import React, { Component } from 'react'
import Diagram from './Diagram'

import { TimelineMax, Sine } from 'gsap'

import floor_top from '../../images/reorg/floor_top.png'
import floor_left from '../../images/reorg/floor_left.png'
import floor_right from '../../images/reorg/floor_right.png'
import floor_bottom from '../../images/reorg/floor_bottom.png'
import frame_1 from '../../images/reorg/reorg_frame_1.png'
import frame_2 from '../../images/reorg/reorg_frame_2.png'
import frame_3 from '../../images/reorg/reorg_frame_3.png'
import frame_4 from '../../images/reorg/reorg_frame_4.png'
import frame_5 from '../../images/reorg/reorg_frame_5.png'
import frame_6 from '../../images/reorg/reorg_frame_6.png'
import frame_7 from '../../images/reorg/reorg_frame_7.png'
import frame_8 from '../../images/reorg/reorg_frame_8.png'
import frame_9 from '../../images/reorg/reorg_frame_9.png'

class Reorganize extends Component {

  animate = (diagram_id) => {
    // Setup Timeline
    const tl = new TimelineMax({ delay: 0.2 })
    const frames = document.getElementsByClassName('reorg-frame')
    const frames_speed = 0.3
    const frames_delay = 0.1*2
    const floor_speed = 1
    const floor_delay = 0.5

    // Add animations
    tl.set(frames,{className:'+=hidden'})

    // Floor parts
    tl
    .from('#floor_top', floor_speed, {
      y: '-=100',
      opacity: 0,
      ease: Sine.easeOut,
    }, floor_delay)
    .from('#floor_left', floor_speed, {
      x: '-=100',
      opacity: 0,
      ease: Sine.easeOut,
    }, floor_delay)
    .from('#floor_right', floor_speed, {
      x: '+=100',
      opacity: 0,
      ease: Sine.easeOut,
    }, floor_delay)
    .from('#floor_bottom', floor_speed, {
      y: '+=100',
      opacity: 0,
      ease: Sine.easeOut,
    }, floor_delay)

    // Frames
    for (let i=0; i<frames.length; i++) {
       tl.to(frames[i], frames_speed, {
          className: '-=hidden',
          delay: frames_delay,
       })
    }

    return tl
  }

  render() {
    const frames = 9
    const frameImgs = []
    for (let i=1; i<=frames; i++) {
      frameImgs.push(i)
    }

    return (
      <Diagram section={this.props.section} animate={this.animate}>

        <div className="reorganize-frames">

          <svg viewBox="0 0 1536 762" version="1.1">
              <defs></defs>
              <g id="Reorganize" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="reorganize-svg">
                      <g id="reorg_frames" transform="translate(0.000000, 1.000000)">
                          <image className="reorg-frame" id="reorg_frame_1" x="0" y="0" width="1535.5" height="619.5" xlinkHref={frame_1}></image>
                          <image className="reorg-frame" id="reorg_frame_2" x="0" y="0" width="1536" height="656.5" xlinkHref={frame_2}></image>
                          <image className="reorg-frame" id="reorg_frame_3" x="0" y="0" width="1535.5" height="695" xlinkHref={frame_3}></image>
                          <image className="reorg-frame" id="reorg_frame_4" x="0" y="0" width="1535.5" height="731.5" xlinkHref={frame_4}></image>
                          <image className="reorg-frame" id="reorg_frame_5" x="0" y="0" width="1535.5" height="761" xlinkHref={frame_5}></image>
                          <image className="reorg-frame" id="reorg_frame_6" x="0" y="0" width="1535.5" height="761" xlinkHref={frame_6}></image>
                          <image className="reorg-frame" id="reorg_frame_7" x="0" y="0" width="1535.5" height="761" xlinkHref={frame_7}></image>
                          <image className="reorg-frame" id="reorg_frame_8" x="0" y="0" width="1535.5" height="761" xlinkHref={frame_8}></image>
                          <image className="reorg-frame" id="reorg_frame_9" x="0" y="0" width="1535.5" height="761" xlinkHref={frame_9}></image>
                      </g>
                      <g id="reorg_floor">
                          <image id="floor_top" x="339" y="0" width="892.478284" height="345.950456" xlinkHref={floor_top}></image>
                          <image id="floor_left" x="0" y="157.5" width="804.5" height="313.5" xlinkHref={floor_left}></image>
                          <image id="floor_right" x="804" y="170" width="731.946309" height="286.5" xlinkHref={floor_right}></image>
                          <image id="floor_bottom" x="464" y="328" width="644" height="254" xlinkHref={floor_bottom}></image>
                      </g>
                  </g>
              </g>
          </svg>

          {/* {frameImgs.map((i) => <div className={`create-frame create-frame-${i}`}></div>)} */}
          {/* {frameImgs.map((i) => <img key={i} className={`create-frame create-frame-${i}`} alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuIAAAGjAQMAAABTweIoAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAD1JREFUeNrtwQENAAAAwqD3T20ON6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF4MmdoAAZKFgs8AAAAASUVORK5CYII=" />)} */}

        </div>

      </Diagram>
    )
  }
}

export default Reorganize;
