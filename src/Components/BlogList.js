import React from 'react'
import { FirestoreContext } from '../Store/FirestoreContext/FirestoreContextWrapper'
import BlogSummary from './BlogSummary'
import { Link } from 'react-router-dom'

const BlogList = () => {
  return (
    <div className="list-container">
      <FirestoreContext.Consumer>
        {({ data }) => {
          return (
            data &&
            data.map(blog => (
              <Link to={'/' + blog.id} key={blog.id}>
                <BlogSummary blog={blog} />                
              </Link>
            ))
          )
        }}
      </FirestoreContext.Consumer>
    </div>
  )
}

export default BlogList
