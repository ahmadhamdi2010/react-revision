import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'

import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Services from './pages/services';
import NotFound from './pages/NotFound';
import ServicePage from './pages/ServicePage';
import Blog from './pages/Blog';
import BlogPost, { postLoader} from './pages/BlogPost';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';


const App = () => {
  const addingPost = async (newPost) =>{
    const res = await fetch('/api/blogPosts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    });
    return;
  }

const deletePost = async (id) => {
  const res = await fetch(`/api/blogPosts/${id}`, {
    method: 'DELETE'
  });
  return;
};
  
const updatePost = async (post) => {
  const res = await fetch(`/api/blogPosts/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
  return;
}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element= {<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/addpost" element={<AddPost addPostSubmit={addingPost}/>}/>
        <Route path="/services/:id" element={<ServicePage/>}/>
        <Route path="/blogPosts/:id" element={<BlogPost deletePost={deletePost} />} loader={postLoader}/>
        <Route path="/editPosts/:id" element={<EditPost updatePostSubmit={updatePost}/>} loader={postLoader}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    
  )
  );
  
  return <RouterProvider router={router}/>
}

export default App
