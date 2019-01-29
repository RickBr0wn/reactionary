import React from 'react'

const BlogSummary = ({blog}) => {
  console.log({blog})
  return (
    <div className="blog-summary">
      <h1>{blog.title}</h1>
      <div className="container">
        <p className="small">Originally written by {blog.author}</p>
        <p className="small">
          <i className="far fa-clock" />
          {blog.time}
        </p>
      </div>
      <p className="small">{Date(blog.date)}</p>
      <br />
      <br />
      <p>{blog.summary}</p>
    </div>
  )
}

export default BlogSummary
