import React from 'react'
import Hero from '../macros/Hero'
import Update from '../macros/Update'

const Blog = () => {
  return (
    <>
      <SEO
        title="Jinjasee Global Ltd Blog - Explore Our Insights"
        description="Discover insightful articles on sustainable post-harvest technologies, premium food processing solutions, Keeping up with our progress, and more on the Jinjasee Global Ltd blog."
        name="Jinjasee Global Ltd"
        type="website"
        keywords="Sustainable Post-Harvest Technologies, Food Processing Solutions, Agriculture Insights, Sustainable Farming, Food Industry Trends, Natural Paste Onion Plus, Onion Paste Solutions, Premium Onion Products, Fresh Onion Paste, Onion Processing Innovations, Onion Product for Culinary Enthusiasts, Onion for Health-Conscious Consumers, Premium Onion Solutions, Innovative Onion Paste, Sustainable Onion Processing, Onion Paste for Food Industry, Onion Paste for Restaurants, Onion Paste for Food Manufacturers"
        siteName="Jinjasee Global Ltd"
      />

      <Hero words={"Sustainable Post-harvest Technologies through Quality Food Processing and Consulting Services"} heroText={"Keep up with us"} primaryBtnLink={'/'} primaryBtnText={'contact us'} />

      <Update />
    </>
  )
}

export default Blog