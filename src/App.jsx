import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import DetailPage from './Pages/DetailPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/products/:slug' element={<DetailPage/>}></Route>
      </Routes>
    </>
  )
}

export default App