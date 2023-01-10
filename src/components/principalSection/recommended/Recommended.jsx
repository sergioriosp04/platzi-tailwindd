import RecommendedCard from "./RecommendedCard"

const Recommended = () => {
  return (
    <div className="p-4" id="recommended">
      <p className="mb-2 text-3xl font-semibold text-primary dark:text-white">Recomendados</p>

      <div className="w-auto h-72 items-center overflow-x-auto flex space-x-4">
        <RecommendedCard
          title="titulo 1"
          description="Description 1"
          background="bg-primary"
        ></RecommendedCard>
        
        <RecommendedCard
          title="titulo 2"
          description="Description 2"
          background="bg-white"
        ></RecommendedCard>
        
        <RecommendedCard
          title="titulo 3"
          description="Description 3"
          background="bg-primary"
        ></RecommendedCard>
        
        <RecommendedCard
          title="titulo 4"
          description="Description 4"
          background="bg-white"
        ></RecommendedCard>
        
        <RecommendedCard
          title="titulo 5"
          description="Description 5"
          background="bg-primary"
        ></RecommendedCard>
        
        <RecommendedCard
          title="titulo 6"
          description="Description 6"
          background="bg-white"
        ></RecommendedCard>
        
        <RecommendedCard
          title="titulo 7"
          description="Description 7"
          background="bg-primary"
        ></RecommendedCard>
        
        <RecommendedCard
          title="titulo 8"
          description="Description 8"
          background="bg-white"
        ></RecommendedCard>
      </div>
    </div>
  )
}

export default Recommended