import React from 'react'
import { FirestoreContext } from '../Store/FirestoreContext/FirestoreContextWrapper'
import BlogSummary from './BlogSummary'

const BlogList = () => {
  return (
    <div className="list-container">
      <FirestoreContext.Consumer>
        {({ data }) => {
          return (
            data &&
            data.map(blog => (
              <div key={blog.id}>
                <BlogSummary blog={blog} />
              </div>
            ))
          )
        }}
      </FirestoreContext.Consumer>
    </div>
  )
}

export default BlogList
