import React from 'react'
import PageTitle from '../components/Pagetitle'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const PagesLayout = () => {
  return (<>
      <Navbar/>
      <PageTitle/> 
      <Outlet/>
  </>
  )
}

export default PagesLayout
