import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = (props) => {
  return (
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
          onClick={() => props.setDarkMode(!props.darkMode)}
      >
          <DarkModeIcon className="text-primary" fontSize='inherit'></DarkModeIcon>
      </button>

      <a href="#rentas_destacadas"  className='text-2xl'>
          <PersonIcon className="text-gray-400 dark:text-white" fontSize='inherit'></PersonIcon>
      </a>
      </div>
    </nav>
  )
}

export default Navbar