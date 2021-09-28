import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import App from './App'
const RouterComp = () => {
  return (
    <Router>
      <Switch>
        <ScrollToTop />
        <App />
      </Switch>
    </Router>
  )
}

export default RouterComp
