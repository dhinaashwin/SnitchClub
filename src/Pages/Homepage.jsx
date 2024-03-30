import React from 'react'
import Header from '../Components/Header/Header';
import Hero  from '../Components/Hero/Hero';
import Shop from '../Components/Shop/Shop';
import MensImg from '../images/Mens.jpeg';
import WomensImg from '../images/Womens.jpeg';
import NewArrivalsImg from '../images/NewArrivals.jpg'
import Category from '../Components/Type/Category';

const Homepage = () => {
  return (
    <>
    <Category/>
    <Hero />
      <Shop title='Mens Wear' button='Shop Men' image={MensImg} side='left' category='men'/>
       <Shop title='Womens Wear' button='Shop Women' image={WomensImg} pos='flex-row-reverse'category='women' />
       <Shop title='New Arrivals' button='Explore Now' image={NewArrivalsImg} side='left' newProduct='Yes' /> 
    </>
  )
}

export default Homepage
