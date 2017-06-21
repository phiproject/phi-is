import React, { Component } from 'react'
import Chat from './Chat'

class Section extends Component {
   render() {
      const messages = this.props.chat
      return (
         <div id={this.props.id} className="Section">
            <div className="w-1of3">
               <Chat messages={messages} />
            </div>
            <div className="w-2of3">
               animatons go here
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
