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
import ProfilePage from './components/ProfilePage'
import UserContext from './components/UserContext'
import UserDetails from './components/UserDetails'

function App() {
  const userData= {name: "Jane Doe", email: "janedoe@example.com"};
  return (<UserContext.Provider value={userData}>
    <ProfilePage/>
  </UserContext.Provider>);
}

export default App;
