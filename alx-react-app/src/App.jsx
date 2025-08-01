import React from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer.jsx'
import UserProfile from './components/UserProfile'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div> 
        <div>
          <h1>User Profile Example</h1>
          <UserProfile
          name= "Alice"
          age= "25"
          bio= "Loves hiking and photography"
          />
        </div>
      
        </div>
    
  )
}

export default App;
