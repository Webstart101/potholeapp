import React, { useContext, useState, useEffect } from "react"
import { auth } from "./Firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    try{ 
      auth.createUserWithEmailAndPassword(email, password)
    }
    catch(error){
      console.log(error)
    }
  }

  function login(email, password) {
    try{
      auth.signInWithEmailAndPassword(email, password)
    }
    catch(error){
      console.log(error)
    }
  }

  function logout() {
    try {
      auth.signOut()
    }
    catch(error){
      console.log(error)
    }
  }

  // function resetPassword(email) {
  //   return auth.sendPasswordResetEmail(email)
  // }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password)
  // }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    // resetPassword,
    // updateEmail,
    // updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}