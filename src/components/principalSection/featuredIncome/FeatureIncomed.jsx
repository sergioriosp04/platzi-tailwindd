import FeatureIncomedCard from "./FeatureIncomedCard"

const FeatureIncomed = () => {
  return (  
    <div className="w-full h-full p-4" id="featured_income">
      <p className="mb-4 text-3xl font-semibold text-primary dark:text-white">Rentas destacadas</p>

      <div className="w-full h-full flex flex-col items-center justify-center">
        <FeatureIncomedCard
          title='Titulo uno'
          description='description of description 1'
          background='bg-my-image2'
        ></FeatureIncomedCard>

        <div className="w-full md:flex md:h-full md:w-full md:space-x-4 mt-4">
          <FeatureIncomedCard
            title='Titulo uno'
            description='description of description 1'
            background='bg-my-image md:h-auto'
          ></FeatureIncomedCard>

          <div className="md:flex md:flex-col mt-4">
            <FeatureIncomedCard
              title='Titulo uno'
              description='description of description 1'
              background='bg-my-image'
            ></FeatureIncomedCard>
              
            <FeatureIncomedCard
              title='Titulo uno'
              description='description of description 1'
              background='bg-my-image2'
            ></FeatureIncomedCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureIncomed