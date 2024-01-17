import React from 'react'
import Hero from '../macros/Hero'
import AboutBlock from '../macros/AboutBlock'

const About = () => {
  return (
    <>
        <Hero words={"Sustainable Post-harvest Technologies through Quality Food Processing and Consulting Services"} heroText={"About Jinjasee"} primaryBtnLink={'/'} primaryBtnText={'contact us'} />
        <AboutBlock />
    </>
  )
}

export default About