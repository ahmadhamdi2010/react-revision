import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom';
import Spinner from '../components/Spinner'
import PageTitle from '../components/Pagetitle'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const BlogPost = ({deletePost}) => {
    const {id} = useParams();
    const post = useLoaderData();
    const navigate = useNavigate();

    const onDeleteClick = (postId) => {
        const confirm = window.confirm('Are you sure you want to delete this post?');

        if(!confirm) return;

        deletePost(postId)
        toast.success("Delete successful")
        navigate('/blog');
    }

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
            <dt className="text-sm/6 font-medium text-gray-900">Author role</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{post.author.role}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Description</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              {post.description}
            </dd>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-gray-900">Options</dt>
            <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
            <button onClick={()=> onDeleteClick(post.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Delete</button>
            <button onClick={()=> navigate(`/editPosts/${post.id}`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Edit</button>

            </dd>
          </div>
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
