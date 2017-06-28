import React, { Component } from 'react'
import Diagram from './Diagram'

// import anime from 'animejs'
import { TimelineMax, Sine, Back, Quart } from 'gsap'
import image from '../../images/simulate_base.png'

class Invest extends Component {
  animate = (diagram_id) => {
    // Setup Timeline
    const tl = new TimelineMax()
    const delayInterval = 0.2
    const speed = 0.8
    const groups = [1,2,3,4,5,6]

    // Add Timeline animations
    groups.forEach(function(group,i){
      tl.staggerFrom('.invest-cubes-'+group+' .invest-cube',speed,{
        y: '+=10',
        opacity: 0,
        ease: Quart.easeInOut,
        // delay: delayInterval*group,
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

         <svg className="invest-svg" viewBox="0 0 618 323" version="1.1">
             <defs></defs>
             <g id="Invest" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                 <g id="invest-cubes" fillRule="nonzero">

                   <g className="invest-cubes-4">
                     <g className="invest-cube" id="cube_6-copy" transform="translate(140.000000, 0.000000)">
                         <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 87.8 46.2 104.6"></polygon>
                         <polygon id="cube_left" fill="#D8D8D8" points="0 87.8 0 17.3 46.2 34.1 46.2 104.6"></polygon>
                         <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_8-copy" transform="translate(51.000000, 26.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 104.1 46.2 33.6 92.5 16.8 92.5 87.3"></polygon>
                         <polygon id="cube_left" fill="#E5E5E5" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                         <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_8-copy" transform="translate(281.000000, 6.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 104.1 46.2 33.6 92.5 16.8 92.5 87.3"></polygon>
                         <polygon id="cube_left" fill="#E5E5E5" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                         <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                   </g>
                   <g className="invest-cubes-3">
                     <g className="invest-cube" id="cube_7-copy" transform="translate(214.000000, 24.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 87.8 46.2 104.6"></polygon>
                         <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 104.6 0 87.8"></polygon>
                         <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_7-copy" transform="translate(149.000000, 62.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 87.8 46.2 104.6"></polygon>
                         <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 104.6 0 87.8"></polygon>
                         <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_5-copy" transform="translate(69.000000, 70.000000)">
                         <path d="M46.2,33.6 C47.2,33.2 92.4,16.8 92.4,16.8 L92.4,87.3 L46.2,104.1 L46.2,33.6 Z" id="cube_right" fill="#262626"></path>
                         <polygon id="cube_left" fill="#666766" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                         <polygon id="cube_top" fill="#8C8C8C" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                   </g>
                   <g className="invest-cubes-1">
                     <g className="invest-cube" id="cube_1-copy" transform="translate(334.000000, 56.000000)">
                         <path d="M46.2,33.6 C47.2,33.2 92.4,16.8 92.4,16.8 L92.4,77.3 L46.2,94.1 L46.2,33.6 Z" id="cube_right" fill="#262626"></path>
                         <polygon id="cube_left" fill="#666766" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                         <polygon id="cube_top" fill="#8C8C8C" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_2-copy" transform="translate(270.000000, 74.000000)">
                         <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 77.8 46.2 94.6"></polygon>
                         <polygon id="cube_left" fill="#D8D8D8" points="0 77.8 0 17.3 46.2 34.1 46.2 94.6"></polygon>
                         <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_4-copy" transform="translate(198.000000, 104.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                         <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                         <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                   </g>
                   <g className="invest-cubes-2">
                     <g className="invest-cube" id="cube_3-copy" transform="translate(119.000000, 120.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 77.8 46.2 94.6"></polygon>
                         <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 94.6 0 77.8"></polygon>
                         <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_6-copy" transform="translate(415.000000, 59.000000)">
                         <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 87.8 46.2 104.6"></polygon>
                         <polygon id="cube_left" fill="#D8D8D8" points="0 87.8 0 17.3 46.2 34.1 46.2 104.6"></polygon>
                         <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_3-copy" transform="translate(357.000000, 85.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 77.8 46.2 94.6"></polygon>
                         <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 94.6 0 77.8"></polygon>
                         <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                     </g>
                   </g>
                   <g className="invest-cubes-2">
                     <g className="invest-cube" id="cube_1-copy" transform="translate(297.000000, 120.000000)">
                         <path d="M46.2,33.6 C47.2,33.2 92.4,16.8 92.4,16.8 L92.4,77.3 L46.2,94.1 L46.2,33.6 Z" id="cube_right" fill="#262626"></path>
                         <polygon id="cube_left" fill="#666766" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                         <polygon id="cube_top" fill="#8C8C8C" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_2-copy" transform="translate(232.000000, 140.000000)">
                         <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 77.8 46.2 94.6"></polygon>
                         <polygon id="cube_left" fill="#D8D8D8" points="0 77.8 0 17.3 46.2 34.1 46.2 94.6"></polygon>
                         <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_2-copy" transform="translate(484.000000, 81.000000)">
                         <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 77.8 46.2 94.6"></polygon>
                         <polygon id="cube_left" fill="#D8D8D8" points="0 77.8 0 17.3 46.2 34.1 46.2 94.6"></polygon>
                         <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                     </g>
                   </g>
                   <g className="invest-cubes-2">
                     <g className="invest-cube" id="cube_5-copy" transform="translate(457.000000, 95.000000)">
                         <path d="M46.2,33.6 C47.2,33.2 92.4,16.8 92.4,16.8 L92.4,87.3 L46.2,104.1 L46.2,33.6 Z" id="cube_right" fill="#262626"></path>
                         <polygon id="cube_left" fill="#666766" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                         <polygon id="cube_top" fill="#8C8C8C" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_4-copy" transform="translate(373.000000, 134.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                         <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                         <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_6-copy" transform="translate(307.000000, 143.000000)">
                         <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 87.8 46.2 104.6"></polygon>
                         <polygon id="cube_left" fill="#D8D8D8" points="0 87.8 0 17.3 46.2 34.1 46.2 104.6"></polygon>
                         <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                     </g>
                   </g>
                   <g className="invest-cubes-3">
                     <g className="invest-cube" id="cube_8-copy" transform="translate(248.000000, 168.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 104.1 46.2 33.6 92.5 16.8 92.5 87.3"></polygon>
                         <polygon id="cube_left" fill="#E5E5E5" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                         <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_2-copy" transform="translate(146.000000, 157.000000)">
                         <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 77.8 46.2 94.6"></polygon>
                         <polygon id="cube_left" fill="#D8D8D8" points="0 77.8 0 17.3 46.2 34.1 46.2 94.6"></polygon>
                         <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_8-copy" transform="translate(96.000000, 166.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 104.1 46.2 33.6 92.5 16.8 92.5 87.3"></polygon>
                         <polygon id="cube_left" fill="#E5E5E5" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                         <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                   </g>
                   <g className="invest-cubes-3">
                     <g className="invest-cube" id="cube_1-copy" transform="translate(179.000000, 189.000000)">
                         <path d="M46.2,33.6 C47.2,33.2 92.4,16.8 92.4,16.8 L92.4,77.3 L46.2,94.1 L46.2,33.6 Z" id="cube_right" fill="#262626"></path>
                         <polygon id="cube_left" fill="#666766" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                         <polygon id="cube_top" fill="#8C8C8C" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_4-copy" transform="translate(525.000000, 131.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                         <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                         <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_7-copy" transform="translate(446.000000, 133.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 87.8 46.2 104.6"></polygon>
                         <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 104.6 0 87.8"></polygon>
                         <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                     </g>
                   </g>
                   <g className="invest-cubes-4">
                     <g className="invest-cube" id="cube_2-copy" transform="translate(504.000000, 173.000000)">
                         <polygon id="cube_right" fill="#7F7F7F" points="46.2 34.1 92 17.3 92 77.8 46.2 94.6"></polygon>
                         <polygon id="cube_left" fill="#D8D8D8" points="0 77.8 0 17.3 46.2 34.1 46.2 94.6"></polygon>
                         <polygon id="cube_top" fill="#E5E5E5" points="46.2 0 0 17.3 46.2 34.1 92 17.3"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_5-copy" transform="translate(381.000000, 160.000000)">
                         <path d="M46.2,33.6 C47.2,33.2 92.4,16.8 92.4,16.8 L92.4,87.3 L46.2,104.1 L46.2,33.6 Z" id="cube_right" fill="#262626"></path>
                         <polygon id="cube_left" fill="#666766" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
                         <polygon id="cube_top" fill="#8C8C8C" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_3-copy" transform="translate(331.000000, 189.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 77.8 46.2 94.6"></polygon>
                         <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 94.6 0 77.8"></polygon>
                         <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                     </g>
                   </g>
                   <g className="invest-cubes-5">
                     <g className="invest-cube" id="cube_4-copy" transform="translate(403.000000, 210.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                         <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                         <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_7-copy" transform="translate(109.000000, 203.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 87.8 46.2 104.6"></polygon>
                         <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 104.6 0 87.8"></polygon>
                         <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_4-copy" transform="translate(194.000000, 228.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 94.1 46.2 33.6 92.5 16.8 92.5 77.3"></polygon>
                         <polygon id="cube_left" fill="#E5E5E5" points="0 77.3 0 16.8 46.2 33.6 46.2 94.1"></polygon>
                         <polygon id="cube_top" fill="#F1F0F2" points="46.2 0 92.5 16.8 46.2 33.6 0 16.8"></polygon>
                     </g>
                   </g>
                   <g className="invest-cubes-5">
                     <g className="invest-cube" id="cube_3-copy" transform="translate(15.000000, 99.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 34.1 92.5 17.3 92.5 77.8 46.2 94.6"></polygon>
                         <polygon id="cube_left" fill="#999999" points="0 17.3 46.2 34.1 46.2 94.6 0 77.8"></polygon>
                         <polygon id="cube_top" fill="#CCCCCC" points="46.2 0 92.5 17.3 46.2 34.1 0 17.3"></polygon>
                     </g>
                     <g className="invest-cube" id="cube_8-copy" transform="translate(0.000000, 139.000000)">
                         <polygon id="cube_right" fill="#333333" points="46.2 104.1 46.2 33.6 92.5 16.8 92.5 87.3"></polygon>
                         <polygon id="cube_left" fill="#E5E5E5" points="0 87.3 0 16.8 46.2 33.6 46.2 104.1"></polygon>
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
