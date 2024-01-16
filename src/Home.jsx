import React from 'react'
import Layout from './layouts/Layout'
import Hero from './Hero'
import Solutions from './Solutions'
import Mission from './Mission'
import Stat from './Stat'
import Products from './Products'
import Update from './Update'

const Home = () => {
  return (
    <>
        <Layout>
            <Hero />
            <Solutions />
            <Mission />
            <Stat />
            <Products />
            <Update />
        </Layout>
    </>
  )
}

export default Home