import React from 'react'
import { Link } from 'react-router-dom'

function BlogList({blogs, title, handleDelete}) {
    // Destructuring props to {blogs, title}

  return (
    <div className='blog-list'>
        <h2>{title}</h2>
        {blogs.map((eachBlog) => (
            // See, props.blogs ni yang menyebabkan left-handed blogs = {blogs} dari Home.js tu berfungsi.
            // Kalau letak props.belok, then it will become belok = {blogs}

            <div className="blog-preview" key={eachBlog.id} id = {eachBlog.id}>
                <Link to={`/blogs/${eachBlog.id}`}>
                  <h2>{eachBlog.title}</h2>
                  <p>Written by: {eachBlog.author} </p>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default BlogList