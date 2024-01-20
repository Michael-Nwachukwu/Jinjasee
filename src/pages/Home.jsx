import React from 'react'
import Hero from '../macros/Hero'
import Solutions from '../macros/Solutions'
import Mission from '../macros/Mission'
import Stat from '../macros/Stat'
import Products from '../macros/Products'
import Update from '../macros/Update'
import StatWrapper from '../layouts/StatWrapper'
import SEO from '../Seo'

const Home = () => {
  return (
    <>
      <SEO
        title="Jinjasee Global ltd, we are into Sustainable Post-harvest Technologies through Quality Food Processing and Consulting Services"
        description="Explore sustainable post-harvest technologies and premium food processing solutions with Jinjasee Global Ltd. From farm to mouth, our expertise in quality consulting services ensures a seamless journey for your produce. Elevate your food industry standards with us. Our product, the Natural Paste Onion Plus, offers innovative onion paste solutions."
        name="Jinjasee Global Ltd"
        type="website"

        keywords="Onion Product, Onion paste, paste, Natural Paste Onion Plus, Onion peocessing, 100% Natural, Fresh Onions, Free From Artificial Additives, Unique onion flavor, Versatile Flavor Profile, Onion for Health-Conscious Consumers, Onion for Culinary Enthusiasts, Premium onion, Convenient Solution for cutting onion, Onion product for Households Restaurants Food Manufacturers, Reduce Post Harvest Loss, Onion All Year Availability, Onion Farm Produce, Encouraging Farmers, Jinjasee Global LTD, Pioneering Food Processing Company, Sustainable Agriculture Lagos Nigeria, Business, Dedicated, Creating, Sustainable Post-Harvest Solutions, High-Quality Food Processing, Consulting Services, Reduce onion Waste, Enhance Value of Agricultural Produce. Fresh onion paste Natural paste onion plus, Sustainable Post-harvest Technologies, Quality Food Processing, Consulting Services"

        siteName="Jinjasee Global Ltd"
      />
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