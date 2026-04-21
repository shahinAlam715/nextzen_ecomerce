import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './Component/RootLayout'
import Conntactt from './Pages/Conntactt'
import Login from './Pages/Login'
import Courses from './Pages/Courses'
import About from './Pages/About'
import ScrollTop from './Component/ScrollTop'

let router = createBrowserRouter(createRoutesFromElements(

  <Route element={<RootLayout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/conntactt' element={<Conntactt/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/about' element={<About/>}></Route>
  </Route>

))

function App() {
 

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
     <ScrollTop/>
    </>
  )
}

export default App
