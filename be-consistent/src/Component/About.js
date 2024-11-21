import React from 'react'
import Footer from './Footer'

const About = () => {
  document.title = "About- Be Consistent";
  return (
    <div className='h-screen'>
       <div className="text-white h-full p-4 flex flex-col justify-center items-center text-center">
      <h1 className="font-bold text-4xl m-6">About Be Consitent</h1>
      <p className="m-7 p-2 md:p-5 text-lg font-serif">
Welcome to Be Consistent, your one-stop destination for staying up-to-date with the latest coding contests and hackathons from various platforms across the internet. Our mission is to provide programmers, developers, and tech enthusiasts with a comprehensive source of information about upcoming coding challenges, competitions, and hackathons.
</p>

<h1 className="font-bold text-4xl m-6">Our Vision</h1>

<p>In a world where innovation and problem-solving are key, coding contests and hackathons are essential avenues for honing your skills, learning new technologies, and showcasing your talent. Our vision is to make sure that you never miss an opportunity to participate in these exciting events. Whether you're a beginner looking to dive into the world of competitive programming or a seasoned coder seeking new challenges, we aim to be the go-to platform for all your contest-related needs.
</p>
    </div>
      <Footer/>
    </div>
  )
}

export default About
