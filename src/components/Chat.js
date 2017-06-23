import React, { Component } from 'react'
import { TimelineMax, Sine, Back } from 'gsap'
// import Waypoint from 'react-waypoint'
import { randomInt } from '../helpers'
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'

function appear(id, section) {
  let elements = document.getElementById(id).getElementsByClassName('message')
  console.log('.bg-gradient-'+section);
  return new TimelineMax()
  .staggerFrom(elements,0.5,{
    css: {
      transform: 'translateX(-50px)',
      opacity: 0
    },
    ease: Back.easeOut
  },0.75)
  .to('.bg-gradient-'+section,1,{
    opacity: 1,
    ease: Sine.easeInOut
  },0)
}

// function changeGradient(id) {
//   return new TimelineMax()
//   .to('#gradient',0.3,{
//     className: '+=bg-gradient-1',
//     ease: Back.easeOut
//   })
// }

class Chat extends Component {

  componentWillMount() {
    // Setup object id, and a place to store animations
    this.id = this.props.id+'-chat'
    this.container = this.props.id+'-container'
    this.anims = {}
  }

  componentDidMount() {
    // Setup animations once the component is actually in scope
   //  this.anims.enter = appear(this.id)

   const tween = appear(this.id, this.props.id)

   const scene = new ScrollMagic
   .Scene({triggerElement: "#"+this.props.id, duration: 200})
   .setTween(tween)
  //  .addIndicators()
   .addTo(this.props.controller)
  }


  renderMessage = (message, i) => (
    <div key={i} id={`${this.id}-${i}`} className="message chat-message"> <span>{ message }</span> </div>
  )

  render() {
    const { messages } = this.props
    return (
      // <Waypoint onEnter={this.waypointEnter} onLeave={this.waypointLeave}>
        <div id={this.id} className="Chat">
          { messages.map((m, i) => this.renderMessage(m, i)) }
        </div>
      // </Waypoint>
    )
  }
}

export default Chat
