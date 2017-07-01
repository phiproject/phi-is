import React, { Component } from 'react'
import Diagram from './Diagram'

import { TimelineMax } from 'TweenMax'

import frame_01 from '../../images/create/create-frame-01.png'
import frame_02 from '../../images/create/create-frame-02.png'
import frame_03 from '../../images/create/create-frame-03.png'
import frame_04 from '../../images/create/create-frame-04.png'
import frame_05 from '../../images/create/create-frame-05.png'
import frame_06 from '../../images/create/create-frame-06.png'
import frame_07 from '../../images/create/create-frame-07.png'
import frame_08 from '../../images/create/create-frame-08.png'
import frame_09 from '../../images/create/create-frame-09.png'
import frame_10 from '../../images/create/create-frame-10.png'
import frame_11 from '../../images/create/create-frame-11.png'

class Create extends Component {

  animate = (diagram_id) => {
    // Setup Timeline
    const tl = new TimelineMax({ delay: 0.2 })
    const elements = document.getElementsByClassName('create-frame')
    const length = elements.length
    const speed = 0.3
    const delay = 0.1

    // Add animations
    tl.set(elements,{className:'+=hidden'})

    for (let i=0; i < length; i++) {
       tl.to(elements[i], speed, {
          className: '-=hidden',
          delay: delay,
       })
    }

    return tl
  }

  render() {
    const frames = 11
    const frameImgs = []
    for (let i=0; i<=frames; i++) {
      frameImgs.push(i)
    }

    return (
      <Diagram section={this.props.section} animate={this.animate}>

        <div className="create-frames">

          {/* {frameImgs.map((i) => <img key={i} className={`create-frame create-frame-${i}`} alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuIAAAGjAQMAAABTweIoAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAD1JREFUeNrtwQENAAAAwqD3T20ON6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF4MmdoAAZKFgs8AAAAASUVORK5CYII=" />)} */}
          <svg className="create-svg" viewBox="0 0 1536 874" version="1.1">
              <defs></defs>
              <g id="Create" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="create-frames">
                      <image className="create-frame create-frame-1"  x="0" y="0" width="1536" height="874" xlinkHref={frame_01}></image>
                      <image className="create-frame create-frame-2"  x="0" y="0" width="1536" height="874" xlinkHref={frame_02}></image>
                      <image className="create-frame create-frame-3"  x="0" y="0" width="1536" height="874" xlinkHref={frame_03}></image>
                      <image className="create-frame create-frame-4"  x="0" y="0" width="1536" height="874" xlinkHref={frame_04}></image>
                      <image className="create-frame create-frame-5"  x="0" y="0" width="1536" height="874" xlinkHref={frame_05}></image>
                      <image className="create-frame create-frame-6"  x="0" y="0" width="1536" height="874" xlinkHref={frame_06}></image>
                      <image className="create-frame create-frame-7"  x="0" y="0" width="1536" height="874" xlinkHref={frame_07}></image>
                      <image className="create-frame create-frame-8"  x="0" y="0" width="1536" height="874" xlinkHref={frame_08}></image>
                      <image className="create-frame create-frame-9"  x="0" y="0" width="1536" height="874" xlinkHref={frame_09}></image>
                      <image className="create-frame create-frame-10" x="0" y="0" width="1536" height="874" xlinkHref={frame_10}></image>
                      <image className="create-frame create-frame-11" x="0" y="0" width="1536" height="874" xlinkHref={frame_11}></image>
                  </g>
              </g>
          </svg>


        </div>

      </Diagram>
    )
  }
}

export default Create;
