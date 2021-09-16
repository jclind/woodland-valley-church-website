import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/About/About'
import Beliefs from './pages/Beliefs/Beliefs'
import Events from './pages/Events/Events'
import Give from './pages/Give/Give'
import Ministries from './pages/Ministries/Ministries'
import Sermons from './pages/Sermons/Sermons'
import Visit from './pages/Visit/Visit'
import Home from './pages/Home/Home'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/our-beliefs' component={Beliefs} />
          <Route path='/events' component={Events} />
          <Route path='/give' component={Give} />
          <Route path='/ministries' component={Ministries} />
          <Route path='/sermons' component={Sermons} />
          <Route path='/visit' component={Visit} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
