"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

async function page() {
    let {cid}=useParams()
    let datap = await fetch(`https://dummyjson.com/products/category/${cid}`)
  let dd = await datap.json()
  return (
    <>
     <div className='container mx-auto '>
      
      <section className='py-4'>

<h1 className='py-3 font-bold text-3xl'>{cid}</h1>
<div className='flex flex-wrap text-center'>
{dd.products.map((a)=>(
  <div className=' p-2 w-[24%]'>
    <div className="border p-2">
    <img src={a.thumbnail} alt="" />
  <h2 className='font-bold text-xl py-2'> <Link href={`/details/${a.id}`}> {a.title}</Link></h2>
  </div>
  </div>
))}
</div>
  </section>
      </div> 
    </>
  )
}

export default page
