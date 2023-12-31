import React from 'react'
import { connectToDatabase } from './services/DBService'

const Home = () => {
  connectToDatabase();
  console.log("Home page");
  return (
    <div>
      <h1>Home</h1>
      <h2>soajdoa</h2>
      <h2>soajdoa</h2>
      <h2>soajdoa</h2>
      <h2>soajdoa</h2>
       <h2>soajdoa</h2>
    </div>
  )
}

export default Home
