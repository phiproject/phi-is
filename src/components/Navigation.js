import React, { Component } from 'react'
import Settings from '../settings'

// This component:
// 1. contains navigation - left and right
// 2. enables animated scrolling to each section

// Import animation libraries
import { TimelineMax } from 'TweenMax'
import 'ScrollToPlugin'

class Navigation extends Component {

   // renderSpacer = (link,i) => <span className="navigation__spacer">|</span>
   scrollTo = (e, url) => {
      if (Settings.animation.scrollTo && url.includes('#')) {
         e.preventDefault()
         new TimelineMax().to(window, 1.75, {scrollTo: url})
      }
   }

   renderLink = (link,i) => (
      <span key={i} className="navigation__link">
         <a href={link.url} target={link.target} onClick={(e) => this.scrollTo(e, link.url)}>
            <span>{link.title}</span>
         </a>
      </span>
   )

   render() {
      const { left_links, right_links } = this.props.data
      return (
         <div className="Navigation">

            <div className="container row">

               <div className="col s-hide m7 left">
                  { left_links.map((link,i) => this.renderLink(link,i) ) }
               </div>

               <div className="col s12 m5 right">
                  { right_links.map((link,i) => this.renderLink(link,i) ) }
               </div>

            </div>

         </div>
      )
   }
}

export default Navigation
