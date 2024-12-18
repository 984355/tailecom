import Link from 'next/link'
import React from 'react'

async function page() {
    let data = await fetch('https://dummyjson.com/products/categories')
    let cats = await data.json()
    let datap = await fetch('https://dummyjson.com/products')
  let dd = await datap.json()
  return (
    <>
     <section className='container mx-auto'>
<img className='w-full' src="https://www.bbsm.com.np/uploads/images/banners/50265c02-a069-4a03-9c87-1e2c40796b47.png" alt="" />
<h1 className='text-white font-extrabold text-2xl bg-black p-3 border'>Our products</h1>
</section>
<section className='container mx-auto flex py-4'>
<div className='w-[20%] border p-2  '>
<ul>
  {cats.slice(0,8).map((a)=>(
    <li className='font-bold text-2xl border p-1  'key={a.slug}><Link href={`/cat/${a.slug}`}>{a.name}</Link> </li> 
  ))}</ul></div>
  <div className='w-[80%]'>
  <img src="https://img.lazcdn.com/us/domino/00a49031-4635-4ade-a545-cfab48c16877_NP-1976-688.jpg_2200x2200q80.jpg" alt="" /></div>
  </section>
  <h1 className='py-3 font-bold text-3xl container mx-auto'>All Products</h1>
  <section className='py-4 container mx-auto flex'>


<div className='flex flex-wrap text-center'>
{dd.products.slice(4,20).map((a)=>(
  <div className=' p-2 w-[24%]'>
    
    <div className="border p-2">
    <img src={a.thumbnail} alt="" />
  <h2 className='font-bold text-xl py-2' key={a.id}><Link href={`/details/${a.id}`}> {a.title}</Link></h2>
  </div>
  </div>
))}
</div>
  </section>


     
    </>
  )
}

export default page
