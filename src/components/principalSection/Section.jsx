import Home from "./home/Home"
import Recommended from "./recommended/Recommended"

const Section = () => {
  return (
    <section className='w-full h-full'>
      <Home></Home>
      <Recommended></Recommended>

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
  )
}

export default Section