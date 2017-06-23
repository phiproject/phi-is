import React, { Component } from 'react'
import Settings from '../settings'

// Import Page Components
import Header from './Header'
import Hero from './Hero'
import Sections from './Sections'
import Footer from './Footer'

// Import Animation timline controls
// import { TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import Rellax from 'rellax'

// Import Languages
import en from '../languages/en.json'
import ru from '../languages/ru.json'

// Setup languages as ES6-array so we can switch them later.
const languages = { en, ru }
const languageDefault = 'en'


// Main component - will be rendered to #root in public/index.html
class App extends Component {

  componentWillMount() {
    // Setup language for app
    const languageRequest = this.props.match.params.language
    this.lang = (languageRequest) ? languageRequest : languageDefault
    this.data = languages[this.lang]

    // Setup controller for scroll animations
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    // Setup parallax scrolling - use .rellax on elements
    if (Settings.animation.on && Settings.animation.parallax) {
      this.rellax = new Rellax('.rellax',{center: true});
    }
  }

  render() {
    return (
      <div className="App">

        {/* Background Layers */}
        <div className="bg-gradients">
          <div className="bg-gradient bg-gradient-hide bg-gradient-header" id="gradient"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-about"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-create"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-simulate"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-invest"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-reorganize"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-contact"></div>
        </div>
        <div className="bg-grid"></div>
        <div className="bg-mountains rellax" data-rellax-speed="1500"></div>

        {/* Page Components
          - pass controller to anything with a timeline
          - pass data to anything with text - will automatically handle language
        */}
        <Header data={this.data.header} />
        <Hero data={this.data.hero} />
        <Sections data={this.data.sections} controller={this.controller} />
        <Footer data={this.data.footer} />

      </div>
    );
  }
}

export default App;
