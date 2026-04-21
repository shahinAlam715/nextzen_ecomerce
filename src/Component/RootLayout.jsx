import React from 'react'
import Fotter from './Fotter'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const RootLayout = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <Fotter/>
    </>
  )
}

export default RootLayout