import React, { Component } from 'react'
import Diagram from './Diagram'

// import anime from 'animejs'
import { TimelineMax, Quart } from 'gsap'

class Invest extends Component {

  animate = (diagram_id) => {
    // Setup Timeline
    const tl = new TimelineMax()
    const delayInterval = 0.8
    const speed = 0.8
    const groups = [1,2,3,4]

    // Add Timeline animations
    groups.forEach(function(group,i){
      tl.staggerFrom('.invest-cubes-'+group+' .invest-cube',speed,{
        y: '+=10',
        opacity: 0,
        ease: Quart.easeInOut,
        delay: (!group===1) ? delayInterval : 0.2,
      }, 0.05)
    })

    // tl.staggerTo('.invest-cube',speed/2,{
    //   y: '+=20',
    //   opacity: 0,
    //   ease: Quart.easeInOut,
    //   delay: delayInterval*(groups.length+2),
    // }, 0.02)

    // Return the timeline
    return tl
  }

  render() {
    return (
      <Diagram section={this.props.section} animate={this.animate}>


        <svg className="invest-svg" viewBox="0 0 767 409" version="1.1">
            <defs></defs>
            <g id="Invest" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="invest-cubes" fillRule="nonzero">
                    <g className="invest-cubes-4" transform="translate(15.000000, 17.000000)">
                        <g className="invest-cube" id="cube4-copy" transform="translate(325.000000, 0.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube8-copy" transform="translate(216.000000, 25.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 104.1 46.2 33.6 92.5 16.8 92.5 87.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube4-copy" transform="translate(135.000000, 70.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube8-copy" transform="translate(386.000000, 34.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 104.1 46.2 33.6 92.5 16.8 92.5 87.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube8-copy" transform="translate(486.000000, 43.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 104.1 46.2 33.6 92.5 16.8 92.5 87.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube4-copy" transform="translate(565.000000, 120.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube4-copy" transform="translate(645.000000, 160.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube8-copy" transform="translate(86.000000, 74.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 104.1 46.2 33.6 92.5 16.8 92.5 87.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube8-copy" transform="translate(0.000000, 128.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 104.1 46.2 33.6 92.5 16.8 92.5 87.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube4-copy" transform="translate(55.000000, 160.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                    </g>
                    <g className="invest-cubes-3" transform="translate(168.000000, 64.000000)">
                        <g className="invest-cube" id="cube3-copy" transform="translate(210.000000, 10.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 77.8 46.2 94.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 94.6 0 77.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube3-copy" transform="translate(270.000000, 60.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 77.8 46.2 94.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 94.6 0 77.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube7-copy" transform="translate(350.000000, 58.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 87.8 46.2 104.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 104.6 0 87.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube3-copy" transform="translate(370.000000, 110.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 77.8 46.2 94.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 94.6 0 77.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube3-copy" transform="translate(130.000000, 0.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 77.8 46.2 94.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 94.6 0 77.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube7-copy" transform="translate(60.000000, 38.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 87.8 46.2 104.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 104.6 0 87.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube7-copy" transform="translate(0.000000, 58.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 87.8 46.2 104.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 104.6 0 87.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                    </g>
                    <g className="invest-cubes-2" transform="translate(239.000000, 103.000000)">
                        <g className="invest-cube" id="cube6-copy" transform="translate(115.000000, 0.000000)">
                            <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 87.8 46.2 104.6"></polygon>
                            <polygon id="cube_left" fill="#D8D8D8" points="0 87.8 0 17.3 46.2 34.1 46.2 104.6"></polygon>
                            <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube2-copy" transform="translate(59.000000, 32.000000)">
                            <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 77.8 46.2 94.6"></polygon>
                            <polygon id="cube_left" fill="#D8D8D8" points="0 77.8 0 17.3 46.2 34.1 46.2 94.6"></polygon>
                            <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube6-copy" transform="translate(0.000000, 44.000000)">
                            <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 87.8 46.2 104.6"></polygon>
                            <polygon id="cube_left" fill="#D8D8D8" points="0 87.8 0 17.3 46.2 34.1 46.2 104.6"></polygon>
                            <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube6-copy" transform="translate(197.000000, 47.000000)">
                            <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 87.8 46.2 104.6"></polygon>
                            <polygon id="cube_left" fill="#D8D8D8" points="0 87.8 0 17.3 46.2 34.1 46.2 104.6"></polygon>
                            <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                        </g>
                    </g>
                    <g className="invest-cubes-1" transform="translate(353.000000, 172.000000)">
                        <g className="invest-cube" id="cube1-copy">
                            <path d="M46.2,33.6 C47.2,33.2 92.4,16.8 92.4,16.8 L92.4,77.3 L46.2,94.1 L46.2,33.6 Z" id="cube_right" fill="#262626"></path>
                            <polygon id="cube_left" fill="#666766" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#8C8C8C" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                    </g>
                    <g className="invest-cubes-2" transform="translate(275.000000, 197.000000)">
                        <g className="invest-cube" id="cube2-copy">
                            <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 77.8 46.2 94.6"></polygon>
                            <polygon id="cube_left" fill="#D8D8D8" points="0 77.8 0 17.3 46.2 34.1 46.2 94.6"></polygon>
                            <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube2-copy" transform="translate(142.000000, 9.000000)">
                            <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 77.8 46.2 94.6"></polygon>
                            <polygon id="cube_left" fill="#D8D8D8" points="0 77.8 0 17.3 46.2 34.1 46.2 94.6"></polygon>
                            <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube6-copy" transform="translate(73.000000, 24.000000)">
                            <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 87.8 46.2 104.6"></polygon>
                            <polygon id="cube_left" fill="#D8D8D8" points="0 87.8 0 17.3 46.2 34.1 46.2 104.6"></polygon>
                            <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                        </g>
                    </g>
                    <g className="invest-cubes-3" transform="translate(158.000000, 184.000000)">
                        <g className="invest-cube" id="cube3-copy">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 77.8 46.2 94.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 94.6 0 77.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube7-copy" transform="translate(330.000000, 18.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 87.8 46.2 104.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 104.6 0 87.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube3-copy" transform="translate(270.000000, 50.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 77.8 46.2 94.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 94.6 0 77.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube7-copy" transform="translate(40.000000, 28.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 87.8 46.2 104.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 104.6 0 87.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube3-copy" transform="translate(130.000000, 60.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 77.8 46.2 94.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 94.6 0 77.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                        <g className="invest-cube" id="cube7-copy" transform="translate(190.000000, 68.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 87.8 46.2 104.6"></polygon>
                            <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 104.6 0 87.8"></polygon>
                            <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                        </g>
                    </g>
                    <g className="invest-cubes-4" transform="translate(150.000000, 190.000000)">
                        <g className="invest-cube" id="cube4-copy" transform="translate(0.000000, 39.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube8-copy" transform="translate(61.000000, 53.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 104.1 46.2 33.6 92.5 16.8 92.5 87.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube4-copy" transform="translate(140.000000, 91.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube4-copy" transform="translate(450.000000, 0.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube4-copy-2" transform="translate(367.000000, 50.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube4-copy" transform="translate(300.000000, 80.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                        <g className="invest-cube" id="cube4-copy" transform="translate(195.000000, 112.000000)">
                            <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                            <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                            <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

      </Diagram>
    )
  }
}

export default Invest;
