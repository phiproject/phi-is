import React, { Component } from 'react'
import Diagram from './Diagram'

import { TimelineMax } from 'gsap'

// import frame_1 from '../../images/create-frames/create-frame-01.png'
// import frame_2 from '../../images/create-frames/create-frame-02.png'
// import frame_3 from '../../images/create-frames/create-frame-03.png'
// import frame_4 from '../../images/create-frames/create-frame-04.png'
// import frame_5 from '../../images/create-frames/create-frame-05.png'
// import frame_6 from '../../images/create-frames/create-frame-06.png'
// import frame_7 from '../../images/create-frames/create-frame-07.png'
// import frame_8 from '../../images/create-frames/create-frame-08.png'
// import frame_9 from '../../images/create-frames/create-frame-09.png'
// import frame_10 from '../../images/create-frames/create-frame-10.png'
// import frame_11 from '../../images/create-frames/create-frame-11.png'

// import frames from '../../images/create-frames.png'

class Create extends Component {

  animate = (diagram_id) => {
    // Setup Timeline
    const tl = new TimelineMax({ delay: 0.2 })
    const elements = document.getElementsByClassName('create-frame')
    const length = elements.length
    const speed = 0.1
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
          {frameImgs.map((i) => <img className={`create-frame create-frame-${i}`} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuIAAAGjAQMAAABTweIoAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAD1JREFUeNrtwQENAAAAwqD3T20ON6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF4MmdoAAZKFgs8AAAAASUVORK5CYII=" />)}

        </div>

      </Diagram>
    )
  }
}

export default Create;
