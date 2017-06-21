import React, { Component } from 'react'
import { TimelineMax, Sine, Back } from 'gsap'
import Waypoint from 'react-waypoint'

function appear(id) {
  // let elements = ["#"+id+"-0", "#"+id+"-1", "#"+id+"-2"]
  let elements = document.getElementById(id).getElementsByClassName('message')
  return new TimelineMax({ paused: true })
  .staggerFrom(elements,0.3,{
    css: {
      transform: 'translateX(-20px)',
      opacity: 0
    },
    delay: 1,
    ease: Back.easeOut
  }, 1)
}

class Chat extends Component {

  componentWillMount() {
    // Setup object id, and a place to store animations
    this.id = this.props.id+'-chat'
    this.anims = {}
  }

  componentDidMount() {
    // Setup animations once the component is actually in scope
    this.anims.enter = appear(this.id)
  }

  waypointEnter = () => {
    this.anims.enter.play()
  }

  waypointLeave = () => {
    this.anims.enter.pause(0, true) // resets animation timeline
  }


  renderMessage = (message, i) => (
    <div key={i} id={`${this.id}-${i}`} className="message chat-message"> <span>{ message }</span> </div>
  )

  render() {
    const { messages } = this.props
    return (
      <Waypoint onEnter={this.waypointEnter} onLeave={this.waypointLeave}>
        <div id={this.id} className="Chat">
          { messages.map((m, i) => this.renderMessage(m, i)) }
        </div>
      </Waypoint>
    )
  }
}

export default Chat
