import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom' // , Miss
import registerServiceWorker from './registerServiceWorker'

import './css/vendor/materialize-grid.css'
import './css/styles.css'

// Import pages to send to routes
import App from './components/App'

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

ReactDOM.render(<Routes />, document.getElementById('root'))
registerServiceWorker()
