import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Categories from '../components/categories.jsx'
import Listings from '../components/Listings.jsx'
import Footer from '../components/Footer.jsx'



function HomePage() {
  return (
    <>
      <Navbar/>
      <Slide/>
      <Categories/>
      <Listings/>
      <Footer/>
    </>
  )
}

export default HomePage