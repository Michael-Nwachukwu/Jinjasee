import React from 'react'
import Hero from '../macros/Hero'
import AboutBlock from '../macros/AboutBlock'
import Stat from '../macros/Stat'
import Heading from '../micros/Heading'
import StatWrapper from '../layouts/StatWrapper'

const About = () => {
  return (
    <>
        <Hero words={"Sustainable Post-harvest Technologies through Quality Food Processing and Consulting Services"} heroText={"About Jinjasee"} primaryBtnLink={'/'} primaryBtnText={'contact us'} />
        <AboutBlock />
        
        <StatWrapper>
          <Stat />
        </StatWrapper>
    </>
  )
}

export default About