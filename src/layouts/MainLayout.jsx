import React from 'react'
import Hero from '../components/Hero'
import PageTitle from '../components/Pagetitle'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (<>
      <Navbar/>
      <Outlet/>
  </>
  )
}

export default MainLayout
