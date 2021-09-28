import React from 'react'
import ReactDOM from 'react-dom'
import RouterComp from './RouterComp.js'
import ScrollToTop from './components/ScrollToTop'
import App from './App'
import './index.css'
ReactDOM.render(
  <React.StrictMode>
    <RouterComp />
  </React.StrictMode>,
  document.getElementById('root')
)
