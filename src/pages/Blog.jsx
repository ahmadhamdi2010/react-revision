import React from 'react'
import BlogPostsLoader from '../components/BlogPostsLoader'
import PageTitle from '../components/Pagetitle'


const Blog = () => {
  return (
    <div>
      <PageTitle title="Blog" />
      <BlogPostsLoader isHome={false}/>
    </div>
  )
}

export default Blog
