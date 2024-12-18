
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
      <div className='container flex justify-between mx-auto bg-slate-400 py-4'>
<ul className='flex text-center gap-4   '>
    <li className='border-r-2  '> About <br /> us </li>
    <li className='border-r-2 gap-4 '>My <br /> account</li>
    <li className='border-r-2 gap-4 ' >Order <br /> Tracking</li>
</ul>
<Link href="/"><img className='w-[170px]'  src="https://www.bbsm.com.np/sites/images/Bhatbhateni%20Logo/BBSM%20Logo%20-%20Full.png" alt="" /></Link>
<div>
    <ul className='flex gap-4'>
        <li>Need help? Call Us:</li>
        <li>+ 1800 900</li>
        <li>English</li> 
       <li> USD</li>
    </ul>
</div>
      </div>
      <nav className='text-center container mx-auto py-4  bg-gradient-to-r from-blue-500 to-white '>
        <ul className='flex justify-center gap-20 font-bold '>
            <li className='hover:text-orange-500'><Link href="/"> Home</Link></li>
  
            <li className='hover:text-orange-500'><Link href="/catgo">Categories</Link></li>
  
            <li className='hover:text-orange-500'><Link href="/about">About</Link></li>
            <li className='hover:text-orange-500'><Link href="/contact">Contact Us</Link></li>
  
            <li className='hover:text-orange-500'><Link href="/login">Log In</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
