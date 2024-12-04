import React from 'react'
import HomeCards from '../components/HomeCards'
import Hero from '../components/Hero'
import BlogPostCard from '../components/BlogPostCard'
import BlogPostsLoader from '../components/BlogPostsLoader'

const HomePage = () => {
  return (
    <div>
        <Hero />
    <HomeCards isHome={true}/>
    <BlogPostsLoader isHome={true}/>

    app
  </div>

  )
}

export default HomePage
