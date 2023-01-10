
import './App.css'

import { useEffect, useState } from 'react';

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
        <nav className="text-primary fixed z-10 w-full h-14 bg-white hidden md:flex p-4 justify-between dark:bg-gray-800 dark:text-white">
          <div className="h-auto w-auto">
            <p className="text-xl font-black">tailwind css</p>
          </div>

          <div className="flex space-x-8">
            <a href="#home">
              <p className="font-bold text-md">Inicio</p>
            </a>
            <a href="#home">
              <p className="font-bold text-md">Recomendados</p>
            </a>
            <a href="#home">
              <p className="font-bold text-md">Rentas</p>
            </a>
            <a href="#home">
              <p className="font-bold text-md">FAQS</p>
            </a>
            <a href="#home">
              <p className="font-bold text-md">Sobre nosotros</p>
            </a>
          </div>

          <div className="flex space-x-2">
            <a href="#home"  className='text-2xl'>
              <SearchIcon className="text-primary" fontSize='inherit'></SearchIcon>
            </a>

            <button 
              className='text-2xl'
              onClick={() => setDarkMode(!darkMode)}
            >
              <DarkModeIcon className="text-primary" fontSize='inherit'></DarkModeIcon>
            </button>

            <a href="#rentas_destacadas"  className='text-2xl'>
              <PersonIcon className="text-gray-400 dark:text-white" fontSize='inherit'></PersonIcon>
            </a>
          </div>
        </nav>

        <section className='w-full h-full'>
          <div className="" id="home">
            <div className="">
              <div className="absolute w-full h-full flex flex-col items-center space-y-64 py-4 md:space-y-0 md:items-start md:mt-32 md:ml-10">
                <input 
                  className="rounded-full outline-none p-3 shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 md:hidden" 
                  type="search" 
                  name="" 
                  id=""
                  placeholder="Buscar"
                />

                <div className="hidden h-auto md:w-2/5 md:flex pb-6">
                  <p className="text-3xl font-semibold">Este es un mensaje de bienvenida y saludos</p> 
                </div>

                <button className="w-32 text-primary bg-white font-semibold rounded-full p-3 text-xl transition transition-all duration-500 ease-out hover:bg-primary hover:text-white transform hover:-translate-y-1.5 hover:scale-110 md:w-44">
                  Explorar
                </button>
              </div>
              <div className="w-full h-[65vh] md:h-[75vh]">
                <img className="h-full w-full md:hidden" src="https://i.imgur.com/SK9qO3L.jpg" alt="no image" />
                <img className="w-screen h-full hidden md:block" src="https://i.imgur.com/PNek15a.jpg" alt="no image" />
              </div>
            </div>
          </div>

          <div className="p-4" id="recomendados">
            <p className="mb-2 text-3xl font-semibold text-primary dark:text-white">Recomendados</p>

            <div className="w-auto h-72 items-center overflow-x-auto flex space-x-4">
              <div className="card">
                <div className="w-full h-3/5 bg-my-image bg-cover rounded-t-lg"></div>

                <div className='w-full h-2/5 bg-secondary dark:bg-gray-700 rounded-b-lg p-3'>
                  <p className="cardTitle">Titulo</p>
                  <p className='text-white text-md'>Descripcion de la tarjeta</p>
                </div>
              </div>

              <div className="card">
                <div className="w-full h-3/5 bg-my-image bg-cover rounded-t-lg"></div>

                <div className='w-full h-2/5 bg-secondary dark:bg-gray-700 rounded-b-lg p-3'>
                  <p className='cardTitle'>Titulo</p>
                  <p className='text-white text-md'>Descripcion de la tarjeta</p>
                </div>
              </div>

              <div className="card">
                <div className="w-full h-3/5 bg-my-image bg-cover rounded-t-lg"></div>

                <div className='w-full h-2/5 bg-secondary dark:bg-gray-700 rounded-b-lg p-3'>
                  <p className="cardTitle">Titulo</p>
                  <p className='text-white text-md'>Descripcion de la tarjeta</p>
                </div>
              </div>
              <div className="card">
                <div className="w-full h-3/5 bg-my-image bg-cover rounded-t-lg"></div>

                <div className='w-full h-2/5 bg-secondary dark:bg-gray-700 rounded-b-lg p-3'>
                  <p className="cardTitle">Titulo</p>
                  <p className='text-white text-md'>Descripcion de la tarjeta</p>
                </div>
              </div>

              <div className="card">
                <div className="w-full h-3/5 bg-my-image bg-cover rounded-t-lg"></div>

                <div className='w-full h-2/5 bg-secondary dark:bg-gray-700 rounded-b-lg p-3'>
                  <p className='cardTitle'>Titulo</p>
                  <p className='text-white text-md'>Descripcion de la tarjeta</p>
                </div>
              </div>

              <div className="card">
                <div className="w-full h-3/5 bg-my-image bg-cover rounded-t-lg"></div>

                <div className='w-full h-2/5 bg-secondary dark:bg-gray-700 rounded-b-lg p-3'>
                  <p className="cardTitle">Titulo</p>
                  <p className='text-white text-md'>Descripcion de la tarjeta</p>
                </div>
              </div>

              <div className="card">
                <div className="w-full h-3/5 bg-my-image bg-cover rounded-t-lg"></div>

                <div className='w-full h-2/5 bg-secondary dark:bg-gray-700 rounded-b-lg p-3'>
                  <p className="cardTitle">Titulo</p>
                  <p className='text-white text-md'>Descripcion de la tarjeta</p>
                </div>
              </div>

              <div className="card">
                <div className="w-full h-3/5 bg-my-image bg-cover rounded-t-lg"></div>

                <div className='w-full h-2/5 bg-secondary dark:bg-gray-700 rounded-b-lg p-3'>
                  <p className='cardTitle'>Titulo</p>
                  <p className='text-white text-md'>Descripcion de la tarjeta</p>
                </div>
              </div>

              <div className="card">
                <div className="w-full h-3/5 bg-my-image bg-cover rounded-t-lg"></div>

                <div className='w-full h-2/5 bg-secondary rounded-b-lg p-3'>
                  <p className="cardTitle">Titulo</p>
                  <p className='text-white text-md'>Descripcion de la tarjeta</p>
                </div>
              </div>

            </div>
          </div>

          <div className="w-full h-full p-4" id="rentas_destacadas">
            <p className="mb-4 text-3xl font-semibold text-primary dark:text-white">Rentas destacadas</p>

            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-full h-96 bg-my-image2 bg-cover rounded-xl">
                <p className="cardTitle">Imagen</p>

                <p className='text-sm pl-4 text-black mr-24 md:text-xl'>descripcion de la card y bla bla bla</p>
              </div>

              <div className="w-full md:flex md:h-full md:w-full md:space-x-4 mt-4">
                <div className="w-full h-96 bg-my-image bg-cover rounded-xl md:h-auto">
                  <p className="cardTitle">Imagen</p>

                  <p className='text-sm pl-4 text-black mr-24 md:text-xl'>descripcion de la card y bla bla bla</p>
                </div>

                <div className="md:flex md:flex-col mt-4">
                  <div className="w-full h-96 bg-my-image bg-cover rounded-xl">
                    <p className="cardTitle">Imagen</p>

                    <p className='text-sm pl-4 text-black mr-24 md:text-xl'>descripcion de la card y bla bla bla</p>
                  </div>
                  
                  <div className="w-full h-96 bg-my-image2 bg-cover bg-center rounded-xl mt-4">
                    <p className="cardTitle">Imagen</p>

                    <p className='text-sm pl-4 text-black mr-24 md:text-xl'>descripcion de la card y bla bla bla</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full h-full p-4' id='fqs'>
            <div className="w-full h-full flex flex-col space-y-4">
              <p className='text-3xl text-primary font-semibold dark:text-white'>FAQS</p>

              <div>
                <p className='tex-xl font-semibold text-primary dark:text-white'>Titulo bla bla</p>
                <p className='text-md pt-1 dark:text-white'>
                  descripcion titulo bla bla bla descripcion titulo bla bla bla
                </p>
              </div>

              <div>
                <p className='tex-xl font-semibold text-primary dark:text-white'>Titulo bla bla</p>
                <p className='text-md pt-1 dark:text-white'>
                  descripcion titulo bla bla bla descripcion titulo bla bla bla
                </p>
              </div>
            </div>
          </div>
          
          <footer className="w-full h-auto bg-gray-50 p-6 space-y-2 dark:bg-gray-800">
            <p className="text-md dark:text-white dark:font-bold">Acerca de</p>
            <p className="text-sm text-gray-300 dark:text-white">Inversion</p>
            <p className="text-sm text-gray-300 dark:text-white">empleos</p>
            <p className="text-sm text-gray-300 dark:text-white">terminos y condiciones</p>
            <p className="text-sm text-gray-300 dark:text-white">Tailwind css</p>
          </footer>
        </section>

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
