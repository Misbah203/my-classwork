import React from "react";

export default function Contact() {
    return (
      <div className="bg-pink-200 min-h-screen p-8">
        <h1 className="text-3xl font-bold " >Contact Us</h1>
        <p className="mt-3 font-serif" >Feel free to reach out through this page.</p>
 
  <ul className="flex-justify-center  mt-3">
  <li><a href="mailto:misbahqasim203@gmail.com" 
  className="bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-700 mt-3">Email Us </a></li>
  <br/>
  <li><a href="tel:03180025515" 
  className="bg-pink-600 text-white font-bold  py-2 px-4 rounded-lg hover:bg-pink-700 mt-3">Phone no </a></li>
  </ul>
      </div>
    )
  }