import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'

import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';
import About from './pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element= {<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
    </Route>
  
)
);


const App = () => {
  return <RouterProvider router={router}/>
}

export default App
