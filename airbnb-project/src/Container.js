import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Data from './Data';

export default function Container(){
  const dataComp = Data.map((data) => {
    return (
      <Card
      key = {data.id}
      {...data}
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