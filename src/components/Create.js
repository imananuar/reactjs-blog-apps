import React, { useState } from 'react'

function Create() {
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState("mario");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    console.log(blog);
  }

  return (
    <div className='create'>
        <h1>Add a new Blogs</h1>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog Author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
              <option value="mario">Mario</option>
              <option value="yoshi">Yoshi</option>
          </select>
          <button>Add Blog</button>
          <p> {title} </p>
          <p> {body} </p>
          <p> {author} </p>
        </form>
    </div>
  )
}

export default Create