"use client";
import React from 'react'
import Link from 'next/link';
const Navbar = () => {
    return(
        <div>
          <nav className="bg-pink-600  h-12 px-2 py-2 text-white flex justify-between items-center">
            <div>
                <h1 className='text=3xl font-bold'>
                    <a href="#!">MyFirstWebsite</a>
                </h1>
            </div>
            <div>
                <ul className='flex space-x-5'>
                    <li><Link href="/" className='hover:text-pink-400'>Home</Link></li>
                    <li><Link href="/about" className='hover:text-pink-400'  >About</Link></li>
                    <li><Link href="/contact" className='hover:text-pink-400'>Contact</Link></li>
                    <li><Link href="/services" className='hover:text-pink-400'>Services</Link></li>
                </ul>
            </div>
            <div>
                <ul className='flex space-x-3'>

                    <li><Link href="/logins" className='hover:text-pink-400'>Login</Link></li>
                </ul>
            </div>
          </nav>
        </div>
    )
        
}

export default Navbar


