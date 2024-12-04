import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom';
import Spinner from '../components/Spinner'
import PageTitle from '../components/Pagetitle'



const BlogPost = () => {
    const {id} = useParams();
    const post = useLoaderData();
  return (
    <div>
      <PageTitle title={post.title}/>
      <section style={{margin:50}}>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Author name</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{post.author.name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Description</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {post.description}
            </dd>
          </div>
        </dl>
      </div>
      </section>
    </div>
  )
}

const postLoader = async ({params}) => {
    const res = await fetch(`/api/blogPosts/${params.id}`);
    const data = await res.json();
    return data;

}

export {BlogPost as default, postLoader};
