import React, {useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  
  const [message, setmessage] = useState("")
  
  return (
    <main>
      <h1>welcome to legcy projects</h1>
      <Link to="/login">
      <button style={btn}>
        Login
      </button>
      </Link>
    </main>
  )
}

export default App

const btn = {
  margin: "1rem auto",
  width: "100%",
  maxWidth: 500,
  padding: "0.5rem",
  borderRadius: 5,
  textTransform: 'capitalize',
  fontWeight: 'bold',
}