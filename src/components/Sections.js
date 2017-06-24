import React, { Component } from 'react'
import Chat from './Chat'
import Animation from './Animation'

class Section extends Component {
   render() {
      return (
         <div id={this.props.id} className="Section row">

               <div className="col s12 m8 l5">
                  <Chat
                     section={this.props.id}
                     messages={this.props.chat}
                     controller={this.props.controller}
                  />
               </div>
               <div className="col s12 m12 l7">
                  <Animation
                     section={this.props.id}
                     controller={this.props.controller}
                  />
               </div>
               <div id={`${this.props.id}-end`} className="section-end"></div>

         </div>
      )
   }
}

class Sections extends Component {
   render() {
      const sections = this.props.data
      return (
         <div className="Sections">
            { sections.map((data,i) => <Section key={i} {...data} controller={this.props.controller} /> ) }
         </div>
      )
   }
}

export default Sections
