import firebase from 'firebase'

export const config = {
  apiKey: 'AIzaSyALkIJ1ZMKyr4iwPhq5x91IzUIc1wk-Z5I',
  authDomain: 'fir-sandbox-5dfb0.firebaseapp.com',
  databaseURL: 'https://fir-sandbox-5dfb0.firebaseio.com',
  projectId: 'fir-sandbox-5dfb0',
  storageBucket: 'fir-sandbox-5dfb0.appspot.com',
  messagingSenderId: '109795635169'
}

firebase.initializeApp(config)

export default firebase
