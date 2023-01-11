import Home from "./home/Home"
import Recommended from "./recommended/Recommended"
import FeatureIncomed from "./featuredIncome/FeatureIncomed"
import Fqs from "./fqs/Fqs"
import Footer from "./footer/Footer"

const Section = () => {
  return (
    <section className='w-full h-full'>
      <Home></Home>
      <Recommended></Recommended>
      <FeatureIncomed></FeatureIncomed>
      <Fqs></Fqs>
      <Footer></Footer>
    </section>
  )
}

export default Section