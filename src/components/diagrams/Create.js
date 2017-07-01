import React, { Component } from 'react'
import Diagram from './Diagram'

import { TimelineMax } from 'TweenMax'

import frame_1 from '../../images/create/create-frame-1.png'
import frame_2 from '../../images/create/create-frame-2.png'
import frame_3 from '../../images/create/create-frame-3.png'
import frame_4 from '../../images/create/create-frame-4.png'
import frame_5 from '../../images/create/create-frame-5.png'
import frame_6 from '../../images/create/create-frame-6.png'
import frame_7 from '../../images/create/create-frame-7.png'
import frame_8 from '../../images/create/create-frame-8.png'
import frame_9 from '../../images/create/create-frame-9.png'
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
                      <image className="create-frame create-frame-1"  x="0" y="0" width="1536" height="874" xlinkHref={frame_1}></image>
                      <image className="create-frame create-frame-2"  x="0" y="0" width="1536" height="874" xlinkHref={frame_2}></image>
                      <image className="create-frame create-frame-3"  x="0" y="0" width="1536" height="874" xlinkHref={frame_3}></image>
                      <image className="create-frame create-frame-4"  x="0" y="0" width="1536" height="874" xlinkHref={frame_4}></image>
                      <image className="create-frame create-frame-5"  x="0" y="0" width="1536" height="874" xlinkHref={frame_5}></image>
                      <image className="create-frame create-frame-6"  x="0" y="0" width="1536" height="874" xlinkHref={frame_6}></image>
                      <image className="create-frame create-frame-7"  x="0" y="0" width="1536" height="874" xlinkHref={frame_7}></image>
                      <image className="create-frame create-frame-8"  x="0" y="0" width="1536" height="874" xlinkHref={frame_8}></image>
                      <image className="create-frame create-frame-9"  x="0" y="0" width="1536" height="874" xlinkHref={frame_9}></image>
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
