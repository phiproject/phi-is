import React, { Component } from 'react'

class Footer extends Component {

   renderPerson = (link, i) => (
      <span key={i} className="footer__person">
         <a href={link.url} target={link.target}>
            <span className="footer__person__name">{link.name}</span>
            { (link.job) && <span className="footer__person__job">({link.job})</span> }
         </a>
      </span>
   )

   renderLink = (link,i) => (
      <span key={i} className="footer__link">
         <a href={link.url} target={link.target}>
            {link.title}
         </a>
      </span>
   )

   render() {
      const {
         description,
         team,
         team_title,
         developers,
         developers_title,
         text_links,
         image_links,
      } = this.props.data

      return (
         <div className="Footer row">

            <div className="col s12 m6">

               <div className="message footer__box footer__description">{description}</div>

               <div className="message footer__box footer__team">
                  <div className="footer__box__title">{ team_title }</div>
                  { team.map((link,i) => this.renderPerson(link,i)) }
               </div>

               <div className="message footer__box footer__developers">
                  <div className="footer__box__title">{ developers_title }</div>
                  { developers.map((link,i) => this.renderPerson(link,i)) }
               </div>

            </div>

            <div className="col s12 m6">

               {/* <div className="footer__links right">
                  { text_links.map((link,i) => this.renderLink(link,i)) }
               </div> */}

            </div>

         </div>
      )
   }
}

export default Footer
