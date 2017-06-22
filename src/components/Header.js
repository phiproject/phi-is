import React, { Component } from 'react'

class Header extends Component {

   // renderSpacer = (link,i) => <span className="header__spacer">|</span>

   renderLink = (link,i) => (
      <span key={i} className="header__link">
         <a href={link.url} target={link.target}>
            <span>{link.title}</span>
         </a>
      </span>
   )

   render() {
      const { left_links, right_links } = this.props.data
      return (
         <div className="Header row">

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
