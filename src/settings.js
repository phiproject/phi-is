/*
   Turn on and off differnet animation elements for performance
   - import this file if a component has settings
   - add a setting here then select:
   - true = on
   - false = off
*/

const Settings = {
   animation: {
      // Allow animations
      on: true,
      // Main page animations
      gradients: true,
      parallax: true,
      scroll: true,
      scroll_indicators: false,
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
