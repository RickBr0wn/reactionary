import React from 'react'
import { FirestoreContext } from '../Store/FirestoreContext/FirestoreContextWrapper'
import { DarkModeContext } from '../Store/DarkMode/DarkModeWrapper'
import ToggleSwitch from './ToggleSwitch'

const BlogDetail = props => {
  return (
    <div>
      <FirestoreContext.Consumer>
        {({ data }) => {
          const id = props.match.params.id
          let selectedBlog = null

          data.map(blog =>
            blog.id === id ? (selectedBlog = blog) : null
          )

          if (selectedBlog) {
            const { title, author, time, date, blog } = selectedBlog
            console.log(blog);
            return (
              <DarkModeContext.Consumer>
                {({ on, toggle }) => {
                  return (
                    <div className="app">
                      <div className="header">
                        <h1>Reactionary</h1>
                        <ToggleSwitch on={on} toggle={toggle} />
                      </div>
                      <div className="container details">
                        <h1>{title}</h1>
                        <p className="small">Originally written by {author}</p>
                        <p className="small">
                          <i className="far fa-clock" />
                          {time}
                        </p>
                      </div>
                      <p className="small">{Date(date)}</p>
                      <br />
                      <br />
                      <br />
                      <p>{blog}</p>
                    </div>
                  )
                }}
              </DarkModeContext.Consumer>
            )
          } else {
            // TODO: spinner to go here
            return <h1>loading!</h1>
          }
        }}
      </FirestoreContext.Consumer>
    </div>
  )
}

export default BlogDetail
