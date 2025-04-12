import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'

function App() {
  let [darkMode,setDarkMode] = useState(localStorage.getItem("firke")==="true");
  let [best,setBest] = useState(localStorage.getItem("bestWpm") || 0);

  function changeTheme()
  {
    localStorage.setItem("firke",!darkMode);
    setDarkMode((prev)=>!prev);
  }



  return (
    <>
    <Navbar dabba={darkMode} changeTheme={changeTheme} best={best}/>
    <Body darkMode={darkMode} setBest= {setBest}/>
      
    </>
  )
}

export default App
