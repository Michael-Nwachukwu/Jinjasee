import React from 'react'
import Hero from '../macros/Hero'
import Benefits from '../macros/Benefits'
import ProductsMacro from '../macros/Products'

const Products = () => {
  return (
    <>
      <Hero words={"Sustainable Post-harvest Technologies through Quality Food Processing and Consulting Services"} heroText={"A new way"} primaryBtnLink={'/'} primaryBtnText={'contact us'} />

      <Benefits />

      <ProductsMacro />        
    </>
  )
}

export default Products