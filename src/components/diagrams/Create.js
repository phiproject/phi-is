import React, { Component } from 'react'
import Diagram from './Diagram'

import { TimelineMax } from 'gsap'

class Create extends Component {

  animate = (diagram_id) => {
    // Setup Timeline
    const tl = new TimelineMax({ delay: 0.2 })
    const elements = document.getElementsByClassName('create-frame')
    const length = elements.length
    const speed = 0.083 // 12 frames divided by 1 second
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

          {/* {frameImgs.map((i) => <div className={`create-frame create-frame-${i}`}></div>)} */}
          {frameImgs.map((i) => <img key={i} className={`create-frame create-frame-${i}`} alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuIAAAGjAQMAAABTweIoAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAD1JREFUeNrtwQENAAAAwqD3T20ON6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF4MmdoAAZKFgs8AAAAASUVORK5CYII=" />)}

        </div>

      </Diagram>
    )
  }
}

export default Create;
