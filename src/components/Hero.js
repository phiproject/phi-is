import React, { Component } from 'react'

import IconRead from './icons/IconRead'
import IconPlay from './icons/IconPlay'

class Hero extends Component {

   renderButton = (button, i) => {
      return (
         <div className="col s6">
         <a key={i} href={button.url} alt={button.alt}>
            <button className={button.type}>
               <span>{button.subtitle}</span>
               {button.title}
            </button>
         </a>
         </div>
      )
   }

   render() {
      const { data } = this.props
      const play_button = this.props.data.buttons[1]
      const read_button = this.props.data.buttons[0]

      return (
         <div className="Hero">

            <div>
               <h1 className="Xrellax" data-rellax-speed="1">{data.title}</h1>
               <h2 className="Xrellax" data-rellax-speed="3">{data.subtitle}</h2>
               <div className="buttons row">
                  {/* {data.buttons.map((button,i)=>this.renderButton(button,i))} */}
                  <div className="col s6">
                     <a href={play_button.url}>
                        {/* <img src={icon_play} alt=""/> */}
                        <IconPlay {...data.buttons[1]} />
                     </a>
                  </div>
                  <div className="col s6">
                     <a href={read_button.url}>
                        {/* <img src={icon_read} alt=""/> */}
                        <IconRead {...data.buttons[0]} />
                     </a>
                  </div>
               </div>
            </div>

         </div>
      )
   }
}

export default Hero
