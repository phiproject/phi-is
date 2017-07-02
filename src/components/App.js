import React, { Component } from 'react'
import Settings from '../settings'
import ReactGA from 'react-ga'

// This component:
// 1. Sets up the basic page structure - kind of like your index.html used to.
// 2. Adds the languages - currently: EN / RU
// 3. Adds all the background elements

// Import Page Components
import Navigation from './Navigation'
import Header from './Header'
import Sections from './Sections'
import Footer from './Footer'

// Import Animation timline controls
import ScrollMagic from 'scrollmagic'

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

    ReactGA.initialize('UA-30021343-3');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div>
        {/* Background Layers */}
        { Settings.background.gradients &&
        <div className="bg-gradients">
          <div className="bg-gradient bg-gradient-hide bg-gradient-header" id="gradient"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-about"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-create"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-simulate"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-invest"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-reorganize"></div>
          <div className="bg-gradient bg-gradient-hide bg-gradient-contact"></div>
        </div> }
        { Settings.background.grid && <div className="bg-grid bg-margin bg-frame"></div> }
        { Settings.background.mountains && <div className="bg-mountains bg-margin"></div> }

        <div className="App container">
          {/* Page Components
            - pass controller to anything that uses ScrollMagic
            - pass data to anything with text - will automatically handle language
          */}
          <Navigation data={this.data.navigation} />
          <Header data={this.data.header} />
          <Sections data={this.data.sections} controller={this.controller} />
          <Footer data={this.data.footer} />
        </div>

      </div>
    );
  }
}

export default App;
