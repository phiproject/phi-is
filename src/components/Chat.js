import React, { Component } from 'react'
import Settings from '../settings'
import ReactHtmlParser from 'react-html-parser'

// This component:
// 1. sets up the ScrollMagic timeline for each Chat bubble
// 2. also contains the fade-out animation when sections near the top of the page

// Import animation libraries
import { TimelineMax, Sine } from 'TweenMax'
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'

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

      // Add 'appear' animation to ScrollMagic
      const scene = new ScrollMagic
      .Scene({triggerElement: "#"+this.section, duration: 300})
      .setTween( this.appear(this.id, this.section) )
      .addTo(this.props.controller)

      // Add 'leave' animation to ScrollMagic
      const scene2 = new ScrollMagic
      .Scene({triggerElement: "#"+this.section+'-end', duration: 300})
      .setTween( this.leave(this.id, this.section) )
      .addTo(this.props.controller)

      // Add in-page markers for debugging - turn off before 'npm run build'
      if (Settings.animation.scroll_indicators) {
        scene.addIndicators()
        scene2.addIndicators()
      }
    }
  }

  appear = (id, section) => {
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

    // Return timeline so ScrollMagic can control it.
    return tl
  }

  leave = (id, section) => {
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

    // Return timeline so ScrollMagic can control it.
    return tl
  }


  renderMessage = (message, i) => (
    <div key={i} className="block chat-message">
      <div id={`${this.id}-${i}`} className="message">
        <span>{ ReactHtmlParser(message) }</span>
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
