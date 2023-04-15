import React from 'react'

const Footer = ({totalPrice}) => {
  return (
    <div className='flex text-white bg-gradient-to-r from-[#F49867] to-pink-900 p-4 justify-between items-center font-bold'>
      <p className='text-xl font-bold'>Total price:</p>
      <p className=''>${totalPrice}</p>
   </div>
  )
}

export default Footer