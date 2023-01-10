import './App.css'

import { useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Section from './components/principalSection/Section';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';

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

        <div className="w-full h-14 bg-white fixed left-0 bottom-0 flex space-x-8 items-center justify-center md:hidden dark:bg-gray-700" id="tab_bar">
          <a href="#home" className='text-3xl'>
            <HomeIcon className="text-gray-400 dark:text-white" fontSize='inherit'></HomeIcon>
          </a>

          <a href="#home"  className='text-3xl'>
            <SearchIcon className="text-gray-400 dark:text-white" fontSize='inherit'></SearchIcon>
          </a>

          <a href="#rentas_destacadas"  className='text-3xl'>
            <FavoriteIcon className="text-gray-400 dark:text-white" fontSize='inherit'></FavoriteIcon>
          </a>

          <button className='text-3xl'>
            <DarkModeIcon className="text-primary" fontSize='inherit'></DarkModeIcon>
          </button>

          <a href="#rentas_destacadas"  className='text-3xl'>
            <PersonIcon className="text-gray-400 dark:text-white" fontSize='inherit'></PersonIcon>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
