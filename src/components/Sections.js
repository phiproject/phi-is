import React, { Component } from 'react'
import Chat from './Chat'
import Diagram from './Diagram'

// This component:
// 1. Has a container that takes the json data and renders a new 'Section' for each part.
// 2. Has 'Section' component that has:
//    - Chat bubbles on the left
//    - Diagrams on the right

class Section extends Component {
   render() {
      return (
         <div id={this.props.id} className="Section row">

               <div className="col s12 m8 l4">
                  <Chat
                     section={this.props.id}
                     messages={this.props.chat}
                     controller={this.props.controller}
                  />
               </div>

               <div className="col s12 m12 l8">
                  <Diagram
                     section={this.props.id}
                     controller={this.props.controller}
                     data={this.props}
                  />
               </div>

               <div id={`${this.props.id}-end`} className="section-end"></div>

         </div>
      )
   }
}

// The Sections component just loops through the json data.

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
