import React, { Component } from 'react'
import Settings from '../settings'

import { TimelineMax, Quart, Sine } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'

// Import diagrams
import About from './diagrams/About'
import Create from './diagrams/Create'
import Simulate from './diagrams/Simulate'
import Invest from './diagrams/Invest'
import Reorganize from './diagrams/Reorganize'
import Contact from './diagrams/Contact'


function appear(id) {
  return new TimelineMax()
  .from("#"+id,1,{
    css: {
      transform: 'translateY(100px)',
      opacity: 0,
    },
    ease: Sine.easeInOut
  },0)
}

class Animation extends Component {

  componentWillMount() {
    // Setup object id, and a place to store animations
    this.section = this.props.section
    this.id = this.section+'-animation'
  }

  componentDidMount() {
    // Setup animations once the component is actually in scope
    if (Settings.animation.on && Settings.animation.scroll) {
      const tween = appear(this.id)
      const scene = new ScrollMagic
      .Scene({triggerElement: "#"+this.section, duration: 400})
      .setTween(tween)
      .addTo(this.props.controller)

      if (Settings.animation.scroll_indicators) {
        scene.addIndicators()
      }
    }
  }

  renderDiagram = (section) => {
    // Simple Object to switch which diagram is needed from the section id
    const diagrams = {
      'about': <About section={section} />,
      'create': <Create section={section} />,
      'simulate': <Simulate section={section} />,
      'invest': <Invest section={section} />,
      'reorganize': <Reorganize section={section} />,
      'contact': <Contact section={section} />,
    }
    return diagrams[section]
  }

  render() {
    return (
      <div id={this.id} className="Animation">
        { this.renderDiagram(this.section) }
      </div>
    );
  }
}

export default Animation;
