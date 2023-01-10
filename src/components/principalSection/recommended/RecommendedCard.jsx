const RecommendedCard = (props) => {
  return (
    <div className="card">
      <div className="w-full h-3/5 bg-my-image bg-cover rounded-t-lg"></div>

      <div className={`w-full h-2/5 ${props.background} dark:bg-gray-700 rounded-b-lg p-3`}>
        <p className="cardTitle">{props.title}</p>
        <p className='text-white text-md'>{props.description}</p>
      </div>
    </div>
  )
}

export default RecommendedCard