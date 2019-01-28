import React from 'react'

const BlogDetail = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{}</h1>
      <div className="container">
        <p className="small">Originally written by {}</p>
        <p className="small">
          <i className="far fa-clock" />
          {}
        </p>
      </div>
      <p className="small">{Date()}</p>
      <br />
      <br />
      <br />
      <p>{}</p>
    </div>
  )
}

export default BlogDetail
