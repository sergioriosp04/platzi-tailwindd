const FeatureIncomedCard = (props) => {
  return (
    <div className={`w-full h-96 ${props.background} bg-cover rounded-xl`}>
      <p className="cardTitle">{ props.title }</p>

      <p className='text-sm pl-4 text-black mr-24 md:text-xl'>{ props.description }</p>
    </div>
  )
}

export default FeatureIncomedCard