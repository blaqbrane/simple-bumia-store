import React from 'react'
import {BsCartPlus} from "react-icons/bs"

const Navbar = ({userCarts,setIsopen}) => {
  return (
    <nav className='flex justify-between items-center z-10 bg-gradient-to-r from-pink-900 to-[#F49867] fixed top-0 left-0 w-full  text-white p-6'>
        <div>
            <h1 className='font-serif font-bold text-xl cursor-pointer' onClick={() => setIsopen(false)}>BUMIA</h1>
        </div>
        {/* <div className='flex items-center px-1 rounded bg-white text-[black]'>
          <input type="text" placeholder='Enter item' className='w-full text-[gray] p-1 rounded outline-none md:w-[400px]'/>
          <p >Search</p>
        </div> */}
        <div>
            <button disabled={userCarts.length === 0} onClick={() => setIsopen(true)}><BsCartPlus/></button>
            <button className='absolute top-4 right-4 animate-bounce'>{userCarts && userCarts.length}</button>
        </div>
    </nav>
  )
}

export default Navbar