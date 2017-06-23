import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom' // , Miss
import registerServiceWorker from './registerServiceWorker'

// Import styles
// import './css/vendor/materialize-grid.css'
import './css/styles.css'

// Import pages to send to routes
import App from './components/App'

// This is where you set all the routes
// - if you want to add another language, do so in './components/App.js'
// - to add another page, create a new component in './components/', then set the path in a <Route> below.
const Routes = () => {
   return (
      <BrowserRouter>
         <div>
            <Route exact path="/" component={App} />
            <Route path="/:language" component={App} />
         </div>
      </BrowserRouter>
   )
}

// This renders the app in './public/index.html'
ReactDOM.render(<Routes />, document.getElementById('root'))
registerServiceWorker()
