import React, { Component } from 'react'
import Settings from '../settings'

// This component:
// 1. sets up the ScrollMagic timeline for each Diagram
// 2. switches which diagram should be used from the 'section' json data

// Import animation libraries
import { TimelineMax, Sine } from 'TweenMax'
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'

// Import individual diagram components - these get rendered later
import About from './diagrams/About'
import Create from './diagrams/Create'
import Simulate from './diagrams/Simulate'
import Invest from './diagrams/Invest'
import Reorganize from './diagrams/Reorganize'
import Contact from './diagrams/Contact'

class Diagram extends Component {

  componentWillMount() {
    // Setup object id, and a place to store animations
    this.section = this.props.section
    this.id = this.section+'-animation'
  }

  componentDidMount() {
    // Setup animations once the component is actually in scope
    if (Settings.animation.on && Settings.animation.scroll) {

      // Add 'appear' animation to ScrollMagic
      const scene = new ScrollMagic
      .Scene({triggerElement: "#"+this.section, duration: 400})
      .setTween( this.appear(this.id) )
      .addTo(this.props.controller)

      // Add in-page markers for debugging - turn off before 'npm run build'
      if (Settings.animation.scroll_indicators) {
        scene.addIndicators()
      }
    }
  }

  appear = (id) => {
    // Setup timeline
    const tl = new TimelineMax()

    // Fade in whole diagram from bottom
    tl.from("#"+id,1,{
      css: {
        transform: 'translateY(100px)',
        opacity: 0,
      },
      ease: Sine.easeInOut
    },0)

    // Return timeline so ScrollMagic can control it.
    return tl
  }

  renderDiagram = (section, data) => {
    // Simple Object to switch which diagram component is needed from the section id
    const diagrams = {
      'about': <About section={section} data={data} />,
      'create': <Create section={section} data={data} />,
      'simulate': <Simulate section={section} data={data} />,
      'invest': <Invest section={section} data={data} />,
      'reorganize': <Reorganize section={section} data={data} />,
      'contact': <Contact section={section} data={data} />,
    }
    return diagrams[section]
  }

  render() {
    return (
      <div id={this.id} className="Diagram">
        { this.renderDiagram(this.section, this.props.data) }
      </div>
    );
  }
}

export default Diagram;
