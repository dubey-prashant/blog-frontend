import '../css/main.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './partials/Navbar'
import Footer from './partials/Footer'
import Notfound from './partials/Notfound'
import HomePage from './HomePage'
// Article components
import FullArticle from './Articles/FullArticle'
import CreatePost from './Articles/CreateArticle'
import UpdatePost from './Articles/UpdateArticle'
// Auth components
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/' >
          <HomePage />
        </Route>
        <Route exact path='/blog' component={HomePage} />

        {/* Articles Routes */}
        <Route exact path='/article/:id' >
          <FullArticle />
        </Route>
        <Route exact path='/create' >
          <CreatePost />
        </Route>
        <Route exact path='/update/:id' >
          <UpdatePost />
        </Route>

        {/* Auth Routes */}
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>

        {/* Notfound must be at last declare all routes above this */}
        <Route path='*' component={Notfound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App