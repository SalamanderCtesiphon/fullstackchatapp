import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAutState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useCollectionDate } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyAP0PzSl1hbPQkWI33O5C5hNwUErO9WgY0",

  authDomain: "fullstackchatapp-c64e6.firebaseapp.com",

  projectId: "fullstackchatapp-c64e6",

  storageBucket: "fullstackchatapp-c64e6.appspot.com",

  messagingSenderId: "194250480716",

  appId: "1:194250480716:web:9f8b94a5b123b9f3a4e8e9"

})

function App() {

  const [user] = useAutState(auth)

  return (
    <div className="App">
      <header className="App-header">


        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
        
      </header>
    </div>
  );
}

function SignIn() {

  const useSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <button onClick={useSignInWithGoogle}>Sign in with Google</button>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {

}

export default App;
