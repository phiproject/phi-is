/*
   Turn on and off differnet animation elements for performance
   - import this file if a component has settings
   - add a setting here then select:
   - true = on
   - false = off
*/

const window_width = window.innerWidth
const mobile_width = 600

const Settings = {
   background: {
      mountains: true,
      grid: true,
      gradients: true
   },
   animation: {
      // Allow animations for larger devices
      on: ( window_width > mobile_width ) ? true : false,
      // Main page animations
      gradients: false,
      parallax: false,
      scroll: true,
      scroll_indicators: false,
      scrollTo: true,
      adjectives: true,
      // Section animations
      chat: true,
      diagrams: true, // enable/disable all diagram animations
      diagram: {
         about: true,
         create: true,
         simulate: true,
         invest: true,
         reorganize: true,
         contact: true,
      }
   },
}

export default Settings
