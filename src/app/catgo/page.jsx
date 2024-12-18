import Link from 'next/link'
import React from 'react'

async function page() {
  let datap = await fetch('https://dummyjson.com/products/category/smartphones')
  let dd = await datap.json() 
  let datae = await fetch('https://dummyjson.com/products/category/laptops')
  let ff = await datae.json()
  let datao = await fetch('https://dummyjson.com/products/category/home-decoration')
  let oo = await datao.json()
  let datag = await fetch('https://dummyjson.com/products/category/sports-accessories')
  let gg = await datag.json()

  return (
    <>
    <section className='py-4'>

<h1 className='py-3 font-bold text-xl'>Smartphoe</h1>
<div className='flex flex-wrap text-center'>
{dd.products.slice(0,8).map((a)=>(
  <div className=' p-2 w-[24%]'>
    
    <div className="border p-2"><h2 className='font-bold text-xl py-2' key={a.id}><Link href={`/details/${a.id}`}> {a.title}</Link></h2>
    <img src={a.thumbnail} alt="" />
  
  </div>
  </div>
))}
</div>
<h1 className='py-3 font-bold text-3xl flex justify-between'>laptops
  <p className='justify-end'><button className='btn bg-blue-400 hover:bg-orange-500 p-1 rounded-lg text-lg'>More</button> </p>
</h1>
<div className='flex flex-wrap text-center'>
{ff.products.slice(0,4).map((a)=>(
  <div className=' p-2 w-[24%]'>
    <div className="border p-2"><h2 className='font-bold text-xl py-2' key={a.id}><Link href={`/details/${a.id}`}> {a.title}</Link></h2>
    <img src={a.thumbnail} alt="" />
  
  </div>
  </div>
))}
</div>
<h1 className='py-3 font-bold text-3xl flex justify-between'>Home Decoration
  <p className='justify-end'><button className='btn bg-blue-400 hover:bg-orange-500 p-1 rounded-lg text-lg'>More</button> </p>
</h1>
<div className='flex flex-wrap text-center'>
{oo.products.slice(0,4).map((a)=>(
  <div className=' p-2 w-[24%]'>
    <div className="border p-2"><h2 className='font-bold text-xl py-2' key={a.id}><Link href={`/details/${a.id}`}> {a.title}</Link></h2>
    <img src={a.thumbnail} alt="" />
  
  </div>
  </div>
))}
</div>
<h1 className='py-3 font-bold text-3xl flex justify-between'>Sports
  <p className='justify-end'><button className='btn bg-blue-400 hover:bg-orange-500 p-1 rounded-lg text-lg'>More</button> </p>
</h1>
<div className='flex flex-wrap text-center'>
{gg.products.slice(0,4).map((a)=>(
  <div className=' p-2 w-[24%]'>
    <div className="border p-2"><h2 className='font-bold text-xl py-2' key={a.id}><Link href={`/details/${a.id}`}> {a.title}</Link></h2>
    <img src={a.thumbnail} alt="" />
  
  </div>
  </div>
))}
</div>

  </section>
     
    </>
  )
}

export default page
