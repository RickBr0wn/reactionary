import React, { Component } from 'react'
import firebase from '../FirebaseModel/firebase'

export const FirestoreContext = React.createContext()

export class FirestoreContextWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
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
      data: [...this.state.data, newBlog],
      tempBlog: ''
    })
  }

  getItemFromDatabase = () => {
    return firebase
      .firestore()
      .collection(this.props.collection)
      .get()
  }

  prepareIncomingBlogForAddingToState = doc => {
    const newObj = {
      id: doc.id,
      title: doc.data().title,
      time: doc.data().time,
      summary: doc.data().summary,
      date: doc.data().date,
      author: doc.data().author,
      blog: doc.data().blog
    }
    this.setState({ data: [...this.state.data, newObj] })
  }

  addBlogToFireStore = blog => {
    let collection = firebase.firestore().collection(this.props.collection)
    return collection.add(blog)
  }

  componentDidMount() {
    this.getItemFromDatabase().then(snapshot => {
      snapshot.docs.map(doc => this.prepareIncomingBlogForAddingToState(doc))
    })
  }

  callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

  render() {
    return (
      <FirestoreContext.Provider
        value={{
          data: this.state.data,
          handleChange: this.handleChange,
          onSubmit: this.onSubmit,
          getItemFromDatabase: this.getItemFromDatabase,
          addBlogToFireStore: this.addBlogToFireStore,
          callAll: this.callAll
        }}
      >
        {this.props.children}
      </FirestoreContext.Provider>
    )
  }
}
