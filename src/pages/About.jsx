import React from 'react'
import Hero from '../macros/Hero'
import AboutBlock from '../macros/AboutBlock'
import Stat from '../macros/Stat'
import StatWrapper from '../layouts/StatWrapper'
import SEO from '../Seo'


const About = () => {
  return (
    <>

      <SEO
        title="About Jinjasee Global Ltd - Sustainable Post-Harvest Technologies and Consulting Services"
        description="Discover sustainable post-harvest technologies and premium food processing solutions with Jinjasee Global Ltd. Our expertise in quality consulting services ensures a seamless journey for your produce. Elevate your food industry standards with us."
        name="Jinjasee Global Ltd"
        type="website"
        keywords="Reduce Post Harvest Loss, Onion All Year Availability, Onion Farm Produce, Encouraging Farmers, Jinjasee Global LTD, Pioneering Food Processing Company, Sustainable Agriculture Lagos Nigeria, Business, Dedicated, Creating, Sustainable Post-Harvest Solutions, High-Quality Food Processing, Consulting Services, Reduce onion Waste, Enhance Value of Agricultural Produce, Fresh onion paste, Natural paste onion plus"
        siteName="Jinjasee Global Ltd"
      />

      <Hero words={"Sustainable Post-harvest Technologies through Quality Food Processing and Consulting Services"} heroText={"About Jinjasee"} primaryBtnLink={'/'} primaryBtnText={'contact us'} />
      
      <AboutBlock />
      
      <StatWrapper>
        <Stat />
      </StatWrapper>
    </>
  )
}


export default About