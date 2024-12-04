import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'

import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Services from './pages/services';
import NotFound from './pages/NotFound';
import ServicePage from './pages/ServicePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element= {<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/services/:id" element={<ServicePage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  
)
);


const App = () => {
  return <RouterProvider router={router}/>
}

export default App
