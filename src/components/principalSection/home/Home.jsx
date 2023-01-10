const Home = () => {
  return (
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
  )
}

export default Home