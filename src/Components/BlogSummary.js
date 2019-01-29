import React from 'react'

const BlogSummary = ({ blog: { title, time, author, date, summary } }) => {
  return (
    <div className="blog-summary">
      <h1>{title}</h1>
      <div className="container">
        <p className="small">Originally written by {author}</p>
        <p className="small">
          <i className="far fa-clock" />
          {time}
        </p>
      </div>
      <p className="small">{Date(date)}</p>
      <br />
      <br />
      <p>{summary}</p>
    </div>
  )
}

export default BlogSummary
