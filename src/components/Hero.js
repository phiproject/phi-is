import React, { Component } from 'react'
import Settings from '../settings'

import { TimelineMax, TweenMax, Sine } from 'gsap'

import IconRead from './icons/IconRead'
import IconPlay from './icons/IconPlay'

class Hero extends Component {

   componentDidMount() {
      if (Settings.animation.adjectives) {
         this.animateTitle()
         // this.animateAdjectives()
      }
   }

   animateTitle = () => {
      TweenMax.staggerFrom('#hero-1, #hero-2, #hero-3', 0.8, {
         opacity: 0,
         y: '+=20px',
         delay: 0.5,
         ease: Sine.easeInOut
      }, 0.4)
   }

   animateAdjectives = () => {
      // Setup Timeline
      const tl = new TimelineMax({ repeat: -1, delay: 0.2 })
      const length = this.props.data.adjectives.length
      const elements = document.getElementsByClassName('adjective')
      const speed = 1
      const delay = 1.5

      // Add animations
      tl.set(elements,{className:'+=hidden'})

      for (let i=0; i < length; i++) {
         tl.to(elements[i], speed, {
            className: '-=hidden',
         })
         .to(elements[i], speed, {
            className: '+=hidden',
            delay: delay,
         })
      }
   }

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
               <div id="hero-1">
                  <h2 className="rellax" data-rellax-speed="0">{data.title}</h2>
               </div>
               <div id="hero-2">
                  <h1 className="rellax" data-rellax-speed="1">
                     {/* <span id="adjectives">{data.adjectives.map((adjective,i)=><div className="adjective" key={i}>{adjective}</div>)}</span> */}
                     {data.subtitle}
                  </h1>
               </div>
               <div id="hero-3" className="buttons row rellax" data-rellax-speed="4">
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
