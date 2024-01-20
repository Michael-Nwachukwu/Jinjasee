import React, { useEffect } from 'react'
import Hero from '../macros/Hero'
import Benefits from '../macros/Benefits'
import ProductsMacro from '../macros/Products'
import SEO from '../Seo'

const Products = () => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); // Add id as a dependency to scroll to top when the id changes


  return (
    <>

      <SEO
        title="Natural Paste Onion Plus - Premium Food Processing Solutions | Jinjasee Global Ltd"
        description="Discover the innovative Natural Paste Onion Plus and explore sustainable post-harvest technologies with Jinjasee Global Ltd. Elevate your food industry standards with our premium food processing solutions."
        name="Jinjasee Global Ltd"
        type="website"
        keywords="Onion Product, Onion paste, paste, Natural Paste Onion Plus, Onion processing, 100% Natural, Fresh Onions, Free From Artificial Additives, Unique onion flavor, Versatile Flavor Profile, Onion for Health-Conscious Consumers, Onion for Culinary Enthusiasts, Premium onion, Convenient Solution for cutting onion and eye tearing, Onion product for Households Restaurants Food Manufacturers"
        siteName="Jinjasee Global Ltd"
      />

      <Hero words={"Sustainable Post-harvest Technologies through Quality Food Processing and Consulting Services"} heroText={"A new way"} primaryBtnLink={'/'} primaryBtnText={'contact us'} />

      <Benefits />

      <ProductsMacro />        
    </>
  )
}

export default Products