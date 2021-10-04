import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'normalize.css'
import About from './pages/About/About'
import Beliefs from './pages/Beliefs/Beliefs'
import Events from './pages/Events/Events'
import Give from './pages/Give/Give'
import Ministries from './pages/Ministries/Ministries'
import Sermons from './pages/Sermons/Sermons'
import Visit from './pages/Visit/Visit'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import EventPage from './pages/EventPage/EventPage'
import ChildrensMinistriesPage from './pages/ChildrensMinistriesPage/ChildrensMinistriesPage'
import { useHistory } from 'react-router'
import { useEffect } from 'react'

function App() {
  const history = useHistory()

  const scrollToTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }

  useEffect(() => {
    history.listen(() => {
      scrollToTop()
    })
  }, [history])
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/our-beliefs' exact component={Beliefs} />
        <Route path='/events' exact component={Events} />
        <Route path='/give' exact component={Give} />
        <Route path='/ministries' exact component={Ministries} />
        <Route path='/sermons' exact component={Sermons} />
        <Route path='/visit' exact component={Visit} />
        <Route
          path='/childrens-ministries'
          exact
          component={ChildrensMinistriesPage}
        />
        <Route path='/events/:id' children={<EventPage />} />
        <Route path='*' component={Error} />
      </Switch>
    </Layout>
  )
}

export default App
