import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import Search from './pages/Search'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/search' element={<Search />} />
        <Route path='/contact' element={<Contact/>} />
        <Route element={<PrivateRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App