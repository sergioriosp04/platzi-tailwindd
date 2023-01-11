import './App.css'

import { useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Section from './components/principalSection/Section';
import TabBar from './components/tabbar/TabBar';

function App() {

  const [ darkMode, setDarkMode ] = useState(false)
  return (
    <div className={`${darkMode === true ? 'dark' : ''}`}>
      <div className="font-Montserrat dark:bg-gray-900">
        <Navbar
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        ></Navbar>

        <Section></Section>

        <TabBar
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        ></TabBar>
      </div>
    </div>
  )
}

export default App
