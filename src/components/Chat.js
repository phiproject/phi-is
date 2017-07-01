import React, { Component } from 'react'
import Settings from '../settings'

import { TimelineMax, Sine } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'


function appear(id, section) {
  // Setup timeline
  const tl = new TimelineMax()

  // Chat stagger animation
  if (Settings.animation.chat) {
    let elements = document.getElementById(id).getElementsByClassName('message')
    tl.staggerFrom(elements,1.5,{
      css: {
        transform: 'translateY(40px)',
        opacity: 0
      },
      ease: Sine.easeOut
    },0.75)
  }

  // Fade background gradients
  if (Settings.animation.gradients) {
    tl.set('.bg-gradient-header', {css:{opacity: 1}})
    tl.to('.bg-gradient-'+section,1,{
      css: {
        opacity: 1,
      },
      ease: Sine.easeInOut
    },0)
  }

  return tl
}

function leave(id, section) {
  // Setup timeline
  const tl = new TimelineMax()

  // Chat stagger animation
  if (Settings.animation.chat) {
    tl.to('#'+section,1.5,{
      css: {
        transform: 'translateY(-40px)',
        opacity: 0
      },
      ease: Sine.easeOut
    },0.75)
  }

  return tl
}


class Chat extends Component {

  componentWillMount() {
    // Setup object id, and a place to store animations
    this.section = this.props.section
    this.id = this.section+'-chat'
    this.animate = null
  }

  componentDidMount() {
    // Setup animations once the component is actually in scope
    if (Settings.animation.on && Settings.animation.scroll) {

      const scene = new ScrollMagic
      .Scene({triggerElement: "#"+this.section, duration: 300})
      .setTween( appear(this.id, this.section) )
      .addTo(this.props.controller)

      const scene2 = new ScrollMagic
      .Scene({triggerElement: "#"+this.section+'-end', duration: 300})
      .setTween( leave(this.id, this.section) )
      .addTo(this.props.controller)

      if (Settings.animation.scroll_indicators) {
        scene.addIndicators()
        scene2.addIndicators()
      }
    }
  }


  renderMessage = (message, i) => (
    <div key={i} className="block chat-message">
      <div id={`${this.id}-${i}`} className="message">
        <span>{ message }</span>
      </div>
    </div>
  )

  render() {
    const { messages } = this.props
    return (
      <div id={this.id} className="Chat">
        { messages.map((m, i) => this.renderMessage(m, i)) }
      </div>
    )
  }
}

export default Chat
