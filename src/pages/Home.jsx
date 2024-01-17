import React from 'react'
import Hero from '../macros/Hero'
import Solutions from '../macros/Solutions'
import Mission from '../macros/Mission'
import Stat from '../macros/Stat'
import Products from '../macros/Products'
import Update from '../macros/Update'
import StatWrapper from '../layouts/StatWrapper'

const Home = () => {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <Hero words={"Sustainable Post-harvest Technologies through Quality Food Processing and Consulting Services"} heroText={"from Farm to Mouth."} primaryBtnLink={'/'} primaryBtnText={'contact us'} />
        <Solutions />
        <Mission />
        <StatWrapper>
          <Stat />
        </StatWrapper>
        <Products />
        <Update />
      </div>
    
    </>
  )
}

export default Home