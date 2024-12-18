import React from 'react'

function Footer() {
  return (
    <>
     <footer className='container mx-auto bg-black text-white p-2 flex justify-between py-20'>
      <div className='w-[40%] '>
        <h1 className='font-bold text-xl pb-2'>Customer Service</h1>
<ul className='font-semibold'>
  
  <li>Bhat-bhateni Membership</li>
  <li>CSR No-Plastic Bag</li>
  <li>Gift Voucher </li>
  <li>History Timeline</li>
  <li>FAQs</li>
  <li>Application for BBSM Club</li>
  <li>Terms and Conditions</li>

</ul>
      </div>
        <div className='w-[40%] '>
          <h1 className='font-bold text-xl pb-2'>Quick Link</h1>
          <ul className='font-semibold'>
                  <li>Club Card</li>
            <li>Facilities Overview</li>
            <li>Corporate Social Responsibility</li>
            <li>Extension Plans</li>
            <li>Company Overview</li>
            <li>FAQs</li>
            <li>Stores</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='w-[40%]'>
          <h1 className='font-bold text-xl pb-2'>Find A Store Near You</h1>
          <ul className='font-semibold'>
            
            <li>Bhat-Bhateni Kalanki</li>
            <li>Bhat-Bhateni Anamnagar</li>
            <li>Bhat-Bhateni Pokhara</li>
            <li>Bhat-Bhateni Koteshwor</li>
            <li>Bhat-Bhateni Patan</li>
            <li>Bhat-Bhateni Chuchepati</li>
            <li>Bhat-Bhateni Balaju</li>
          </ul>
        </div> 
        <div className='w-[40%] '>
        <img  src="https://www.bbsm.com.np/sites/images/Bhatbhateni%20Logo/BBSM%20Logo%20-%20Full.png" alt="" /></div>
      </footer> 
    </>
  )
}

export default Footer
