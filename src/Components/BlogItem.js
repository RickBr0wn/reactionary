import React from 'react'

const BlogItem = ({blog}) => {
  return (
    <div>
      <p>item</p>
      <p>{blog.id}</p>
      <p>{blog.name}</p>
      <p>{blog.content}</p>
    </div>
  )
}

export default BlogItem
