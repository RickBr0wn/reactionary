import React from 'react'
import { FirestoreContext } from '../Store/FirestoreContext/FirestoreContextWrapper'
import BlogSummary from './BlogSummary'
import { Link } from 'react-router-dom'

const BlogList = () => {
  return (
    <div className="list-container">
      <FirestoreContext.Consumer>
        {({ data }) => {
          console.log(data)
          return (
            data &&
            data.map(blog => (
              <Link to={'/' + blog.id} key={blog.id}>
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
                  <br />
                  <p>{blog.summary}</p>
                </div>
              </Link>
            ))
          )
        }}
      </FirestoreContext.Consumer>
    </div>
  )
}

export default BlogList
