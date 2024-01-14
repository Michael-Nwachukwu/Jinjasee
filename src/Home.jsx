import React from 'react'
import Layout from './layouts/Layout'
import Hero from './Hero'
import Solutions from './Solutions'
import Mission from './Mission'

const Home = () => {
  return (
    <>
        <Layout>
            <Hero />
            <Solutions />
            <Mission />
        </Layout>
    </>
  )
}

export default Home