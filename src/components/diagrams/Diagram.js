import React, { Component } from 'react'
import Settings from '../../settings'
import Waypoint from 'react-waypoint'

class Diagram extends Component {

  componentWillMount() {
    // Setup object id, and a place to store animations
    this.section = this.props.section
    this.id = this.section+'-diagram'
    this.animate = null
  }

  componentDidMount() {
    // Setup animations once the component is actually in scope
    if (Settings.animation.on && Settings.animation.diagrams && Settings.animation.diagram[this.section]) {
      this.animate = this.props.animate(this.section)
    }
  }

  onEnter = () => {
    // Play animation when entering view
    if (Settings.animation.on && Settings.animation.diagrams && Settings.animation.diagram[this.section]) {
      this.animate.restart()
    }
  }

  onLeave = () => {
    // Stop animation when leaving view
    if (Settings.animation.on && Settings.animation.diagrams && Settings.animation.diagram[this.section]) {
      this.animate.pause()
    }
  }

  render() {
    return (
      <Waypoint onEnter={this.onEnter} onLeave={this.onLeave}>
      <div id={this.id} className="diagram">

         {this.props.children}

      </div>
      </Waypoint>
    );
  }
}

export default Diagram;
