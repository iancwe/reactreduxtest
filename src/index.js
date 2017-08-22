import React from 'react' // import the main react dependency
import ReactDOM from 'react-dom' // import reactDOM
import {Provider} from 'react-redux' // Glue for react and redux
import App from './app/App' // import the main app component
import Store from './Store' // Redux state store

import './assets/stylesheets/styles.scss'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'))
