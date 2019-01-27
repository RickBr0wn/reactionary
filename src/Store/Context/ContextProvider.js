import React, { Component } from 'react'
import firebase from '../Firebase/firebase'
import Context from './Context'

export class ContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      blogs: [
        { id: 1, name: 1, content: 'blah' },
        { id: 2, name: 2, content: 'blah, blah' }
      ],
      tempBlog: ''
    }
  }

  handleChange = event => this.setState({ tempBlog: event.target.value })

  onSubmit = event => {
    event.preventDefault()
    const newBlog = {
      id: 3,
      name: this.state.tempBlog,
      content: 'blah blah blah'
    }
    this.addBlogToFireStore(newBlog)
    this.setState({
      blogs: [...this.state.blogs, newBlog],
      tempBlog: ''
    })
  }

  getBlogFromFireStore = () => {
    return firebase
      .firestore()
      .collection('blogs')
      .get()
  }

  prepareIncomingBlogForAddingToState = doc => {
    const newObj = {
      id: doc.id,
      name: doc.data().name,
      content: doc.data().content
    }
    this.setState({ blogs: [...this.state.blogs, newObj] })
  }

  addBlogToFireStore = blog => {
    let collection = firebase.firestore().collection('blogs')
    return collection.add(blog)
  }

  componentDidMount() {
    this.getBlogFromFireStore().then(snapshot => {
      snapshot.docs.map(doc => this.prepareIncomingBlogForAddingToState(doc))
    })
  }

  callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

  render() {
    return (
      <Context.Provider
        value={{
          blogs: this.state.blogs,
          handleChange: this.handleChange,
          onSubmit: this.onSubmit,
          getBlogFromFireStore: this.getBlogFromFireStore,
          addBlogToFireStore: this.addBlogToFireStore,
          callAll: this.callAll
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default ContextProvider
