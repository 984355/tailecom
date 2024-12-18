"use client"
import { useParams } from 'next/navigation'
import React from 'react'

async function page() {
let {id}=useParams()
let datap = await fetch(`https://dummyjson.com/products/${id}`)
  let dd = await datap.json()

  return (
    <>
     <div className="container mx-auto">
        <div className='flex gap-4'>
        <div className='w-[40%]'>
            <img className='w-full' src={dd.thumbnail} alt="" />
        </div>
        <div>
            <h2 className='font-bold text-xl p-2'>{dd.title}</h2>
            <p className='font-semibold'>{dd.description}</p>
            <p className='font-semibold'>Price: {dd.price} /-</p>
            <p></p>
            </div>
        </div> 
        </div>
    </>
  )
}

export default page
