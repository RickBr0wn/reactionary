import React from 'react'

const BlogSummary = ({ blog }) => {
  const { title, summary, time, date, author } = blog
  console.log(Date(date))
  return (
    <div className="blog-summary">
      <h1>{title}</h1>
      <div className="container">
        <p className="small">Originally written by {author}</p>
        <p className="small">{time}</p></div>
      <p>{summary}</p>
    </div>
  )
}

export default BlogSummary