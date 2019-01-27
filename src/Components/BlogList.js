import React from 'react'
import Context from '../Store/Context/Context'
import BlogItem from './BlogItem'

const BlogList = () => {
  return (
    <Context.Consumer>
      {({ blogs }) => {
        return blogs && blogs.map(blog => <BlogItem blog={blog} />)
      }}
    </Context.Consumer>
  )
}

export default BlogList
