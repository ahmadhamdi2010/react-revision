import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import BlogPostCard from './BlogPostCard';

const BlogPostsLoader = ({ isHome = false }) => {
  const [blogPosts, setblogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const apiUrl = isHome ? '/api/blogPosts?_limit=3' : '/api/blogPosts';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        setblogPosts(data);
      } catch (error) {
        console.log('Error getting data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1">
            {blogPosts.map((blogPost) => (
              <BlogPostCard key={blogPost.id} post={blogPost} />
            ))}
          </div>
          
        )}
      </div>
    </div>
  );
};

export default BlogPostsLoader;
