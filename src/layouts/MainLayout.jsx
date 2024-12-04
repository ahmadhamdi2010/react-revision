import React from 'react'
import Hero from '../components/Hero'
import PageTitle from '../components/Pagetitle'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (<>
      <Navbar/>
      <Outlet/>
      <ToastContainer/>
  </>
  )
}

export default MainLayout
