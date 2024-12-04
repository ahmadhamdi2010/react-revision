import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import PageTitle from '../components/Pagetitle'
import { useState } from 'react'
import { toast } from 'react-toastify'

const EditPost = ({updatePostSubmit}) => {

    const post = useLoaderData()

    const [title, setTitle] = useState(post.title);
    const [author, setAuthor] = useState(post.author.name);
    const [postBody, setPostBody] = useState(post.description);
    const [authorRole, setAuthorRole] = useState(post.author.role);
    const navigate = useNavigate();
    const {id} = useParams();

    const submitForm = (e) =>{
        e.preventDefault();
        

        const updatedPost = {
            id,
            title,
            author: {
                name: author,
                role: authorRole
            },
            description: postBody,
        }
        updatePostSubmit(updatedPost);
        toast.success('Post updated successfully')
        return navigate(`/blogPosts/${post.id}`)
    };
  return (
    <div>
      <PageTitle title={"Edit " + post.title}/>
      <section style={{margin:50}}>
      <form onSubmit={submitForm}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">New post</h2>
          <p className="mt-1 text-sm/6 text-gray-600">enter the details of your post here          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
              <label htmlFor="postTitle" className="block text-sm/6 font-medium text-gray-900">
                Article Title
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">The title</div>
                  <input
                    id="postTitle"
                    name="postTitle"
                    type="text"
                    value={title}
                    placeholder="article title"
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    onChange={(e)=> setTitle(e.target.value)}
                 />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="authorName" className="block text-sm/6 font-medium text-gray-900">
                Author name
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">Your name</div>
                  <input
                    id="authorName"
                    name="authorName"
                    type="text"
                    value={author}
                    placeholder="janesmith"
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    onChange={(e)=> setAuthor(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="authorRole" className="block text-sm/6 font-medium text-gray-900">
                Author Role
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">The role</div>
                  <input
                    id="authorRole"
                    name="authorRole"
                    type="text"
                    value={authorRole}
                    placeholder="Role here"
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                    onChange={(e)=> setAuthorRole(e.target.value)}
                 />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="postBody" className="block text-sm/6 font-medium text-gray-900">
                Post content
              </label>
              <div className="mt-2">
                <textarea
                  id="postBody"
                  name="postBody"
                  rows={3}
                  value={postBody}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e)=> setPostBody(e.target.value)}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">Write the post content</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={()=> navigate("/")} type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
      </section>
    </div>
  )
}

export default EditPost
