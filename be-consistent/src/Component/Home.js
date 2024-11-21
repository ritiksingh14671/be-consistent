import React from 'react'
import Hero from './Hero'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import Card from './Card'
import Footer from './Footer';



const Home = () => {

  document.title = "Be Consistent";
const plateformIconCodeforces = "codeforces_Icon.png";
const plateformIconCodechef = "codechef_Icon.png";
const plateformIconLeetcode = "leetCode_logo_black.png";
const plateformIconHackerrank = "hackerrank_Icon.png";
const plateformIconHackerEarth = "hackerearth_logo.png";

const plateformIconAtcode = "atcode_Icon.png";

const [dataCodeForces, setDataCodeForces] = useState([]);
const [dataCodeChef, setDataCodeChef] = useState([]);
const [dataLeetcode, setDataLeetcode] = useState([]);
const [dataHackerRank, setDataHackerRank] = useState([]);
const [dataHackerEarth, setDataHackerEarth] = useState([]);
const [dataAtCoder, setDataAtCoder] = useState([]);
// const [dataTopCoder, setDataTopCoder] = useState([]);





async function  getApiLeetCode(){

  let responseCodeForces, responseCodeChef,responseLeetcode,responseHackerRank,responseHackerEarth ,responseAtCoder;

  responseCodeForces = await fetch ('https://kontests.net/api/v1/codeforces');

  setDataCodeForces (await responseCodeForces.json());


  responseCodeChef = await fetch ('https://kontests.net/api/v1/code_chef');
  setDataCodeChef(await responseCodeChef.json());

  responseLeetcode = await fetch ('https://kontests.net/api/v1/leet_code');
  setDataLeetcode(await responseLeetcode.json());

  responseHackerRank = await fetch ('https://kontests.net/api/v1/hacker_rank');
  setDataHackerRank(await responseHackerRank.json());

  responseHackerEarth = await fetch ('https://kontests.net/api/v1/hacker_earth');
  setDataHackerEarth(await responseHackerEarth.json());

  responseAtCoder = await fetch ('https://kontests.net/api/v1/at_coder');
  setDataAtCoder(await responseAtCoder.json());

  // responseTopCoder = await fetch ('https://kontests.net/api/v1/leet_code');
  // setDataTopCoder(await responseTopCoder.json());
}


useEffect(()=>{
  getApiLeetCode();
},[])


  return (
    <div>
       <Hero/>
      <>
      
       <motion.div className={`sm:px-16 px-6 sm:py-10 py-5 max-w-7xl mx-auto relative z-0`}>
        <p className={`text-white font-black md:text-[30px] sm:text-[20px] text-[20px]`}>Upcoming Contests...</p>
      
                   {/* Plateform 1 CodeForces*/}

      <div className='mt-20'>
        <div className='flex  justify-center'>
        <img className='w-48 h-11 rounded-lg' src="codeforces_logo.png" alt="leetcodepng" />
        </div>
        <div className='border rounded-md mt-2 flex  codeforces justify-evenly flex-wrap gap-10  '>
        <Card plateformImg= {plateformIconCodeforces} data={dataCodeForces}/>   
      </div>
      </div>

                   {/* PlateForm 2 CodeChef  */}

      <div className='mt-20'>
        <div className='flex  justify-center'>
        <img className='w-48 h-11 rounded-lg' src="codechef_logo.png" alt="leetcodepng" />
        </div>
        <div className='border rounded-md mt-2 flex  justify-evenly flex-wrap gap-10  '>
        <Card plateformImg={ plateformIconCodechef} data={dataCodeChef}/>   
      </div>
      </div>

                   {/* Plateform 3 Leetcode */}

        <div className='mt-20'>
        <div className='flex  justify-center'>
        <img className='w-48 h-11 rounded-lg' src="leetCode_head.png" alt="leetcodepng" />
        </div>
        <div className='border rounded-md mt-2 flex  justify-evenly flex-wrap gap-10  '>
        <Card plateformImg={plateformIconLeetcode} data={dataLeetcode}/>   
      </div>
      </div>

                         {/* Plateform 4 HackerRank*/}

     <div className='mt-20'>
      <div className='flex  justify-center'>
        <img className='w-48 h-11 rounded-lg' src="hackerrank_logo.png" alt="leetcodepng" />
        </div>
        <div className='border rounded-md mt-2 flex  justify-evenly flex-wrap gap-10  '>
        <Card plateformImg={plateformIconHackerrank} data={dataHackerRank}/>   
      </div>
      </div>

                    {/* Plateform 5 HackerEarth*/}

      <div className='mt-20'>
        <div className='flex  justify-center'>
        <img className='w-48 h-11 rounded-lg' src="hackerearth_Icon.png" alt="leetcodepng" />
        </div>
        <div className='border rounded-md mt-2 flex  justify-evenly flex-wrap gap-10  '>
        <Card plateformImg={plateformIconHackerEarth} data={dataHackerEarth}/>   
      </div>
      </div>



                    {/* Plateform 6 AtCoder*/}

      <div className='mt-20'>
        <div className='flex  justify-center'>
        <img className='w-48 h-11 rounded-lg' src="atcode_logo.png" alt="leetcodepng" />
        </div>
        <div className='border rounded-md mt-2 flex  justify-evenly flex-wrap gap-10  '>
        <Card plateformImg={plateformIconAtcode} data={dataAtCoder}/>   
      </div>
      </div>


            

       </motion.div>

       <Footer/>
       
       </>
       </div>
  )
}

export default Home
