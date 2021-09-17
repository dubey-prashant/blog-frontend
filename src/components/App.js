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
// states
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../actions'


function App() {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/' >
          <HomePage />
        </Route>
        <Route exact path='/article/:id' >
          {isLogged &&
            <FullArticle />
          }
          <button onClick={() => dispatch(logIn('testettrtrt'))} >log in </button>
        </Route>
        <Route exact path='/create' >
          <CreatePost />
        </Route>
        <Route exact path='/update/:id' >
          <UpdatePost />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>

        {/* Notfound must be at last declare all routes above this */}
        <Route path='*' >
          <Notfound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App