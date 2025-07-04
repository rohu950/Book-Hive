import React from 'react';
import Cards from "./Cards";

import axios from "axios";
import {Link} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { getBook } from '../../../backend/controller/book.controller';

function Course() {
  const [book, setBook]=useState([]);
  useEffect(()=>{
const getBook = async()=>{

try {
const res = await axios.get("http://localhost:4001/book");
console.log(res.data);
setBook(res.data);
  
} catch (error) {
  console.log( error);
  
}

}
getBook();
  },[]);
  return (
  <>
  <div className="min-h-screen bg-white dark:bg-slate-950 px-6 py-12 pt-20 text-black dark:text-white transition-colors duration-300">
  <div className="mt-28 items-center justify-center text-center">
    <h1 className="text-2xl font-semibold md:text-4xl">
      We're delighted to have you <span className="text-pink-500">Here! :)</span>
    </h1>
<p className="mt-12">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!

</p>

<Link to="/">
<button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
  Back
</button>
</Link>


  </div>
<div  className="mt-12 grid grid-cols-1 md:grid-cols-4">
{

book.map((item )=>(
  <Cards key={item.id} item={item} />

))

}

</div>

</div>

  </>
  )
}

export default Course
