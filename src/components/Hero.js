import React, { Component } from 'react'

class Hero extends Component {

   renderButton = (button, i) => {
      return (
         <a key={i} href={button.url} alt={button.alt}>
            <button className={button.type}>
               <span>{button.subtitle}</span>
               {button.title}
            </button>
         </a>
      )
   }

   render() {
      const { data } = this.props
      return (
         <div className="Hero">

            <div>
               <h1 className="Xrellax" data-rellax-speed="1">{data.title}</h1>
               <h2 className="Xrellax" data-rellax-speed="3">{data.subtitle}</h2>
               <div>
                  {data.buttons.map((button,i)=>this.renderButton(button,i))}
               </div>
            </div>

         </div>
      )
   }
}

export default Hero
