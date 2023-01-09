import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Data from './Data';

export default function Container(){
  const dataComp = Data.map((data) => {
    return (
      <Card
      id = {data.id}
      title = {data.title}
      price = {data.price}
      coverImg = {data.coverImg}
      rating = {data.stats.rating}
      reviewCount = {data.stats.reviewCount}
      location = {data.location}

      />
    )
  })
  return(
    <main className='container'>
      <Navbar/>
      <Hero/>
      <section className='wrapper'>{dataComp}</section>
      
    </main>
  )
}