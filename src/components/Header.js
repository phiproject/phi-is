import React, { Component } from 'react'

class Header extends Component {

   // renderSpacer = (link,i) => <span className="header__spacer">|</span>

   renderLink = (link,i) => (
      <span className="header__link"><a key={i} href={link.url} target={link.target}><span>{link.title}</span></a></span>
   )

   render() {
      const { left_links, right_links } = this.props.data
      return (
         <div className="Header">

            <div className="w-1of2 left">
               { left_links.map((link,i) => this.renderLink(link,i) ) }
            </div>

            <div className="w-1of2 right">
               { right_links.map((link,i) => this.renderLink(link,i) ) }
            </div>

         </div>
      )
   }
}

export default Header
