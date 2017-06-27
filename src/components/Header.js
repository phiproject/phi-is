import React, { Component } from 'react'
import Settings from '../settings'
import { TweenLite } from 'gsap'
import 'ScrollToPlugin'

class Header extends Component {

   // renderSpacer = (link,i) => <span className="header__spacer">|</span>
   scrollTo = (e, url) => {
      if (Settings.animation.scrollTo && url.includes('#')) {
         e.preventDefault()
         TweenLite.to(window, 1.75, {scrollTo: url})
      }
   }

   renderLink = (link,i) => (
      <span key={i} className="header__link">
         <a href={link.url} target={link.target} onClick={(e) => this.scrollTo(e, link.url)}>
            <span>{link.title}</span>
         </a>
      </span>
   )

   render() {
      const { left_links, right_links } = this.props.data
      return (
         <div className="Header container row">

            <div className="col s-hide m7 left">
               { left_links.map((link,i) => this.renderLink(link,i) ) }
            </div>

            <div className="col s12 m5 right">
               { right_links.map((link,i) => this.renderLink(link,i) ) }
            </div>

         </div>
      )
   }
}

export default Header
