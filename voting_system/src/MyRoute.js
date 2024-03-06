import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Posts from './Posts'
import Signup from './Signup'
import Signin from './Signin'

const MyRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Posts />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/signin' element={<Signin/>} />
        </Routes>

    </Router>
  )
}

export default MyRoute