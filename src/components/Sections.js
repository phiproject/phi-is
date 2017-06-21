import React, { Component } from 'react'
import Chat from './Chat'
import Animation from './Animation'

class Section extends Component {
   render() {
      const messages = this.props.chat
      return (
         <div id={this.props.id} className="Section row">

               <div className="col s12 m8 l5">
                  <Chat messages={messages} />
               </div>
               <div className="col s12 m12 l7">
                  <Animation />
               </div>

         </div>
      )
   }
}

class Sections extends Component {
   render() {
      const sections = this.props.data
      return (
         <div className="Sections">
            { sections.map((data,i) => <Section key={i} {...data} /> ) }
         </div>
      )
   }
}

export default Sections
