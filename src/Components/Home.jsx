import React, { useState } from 'react'
import Navbar from './Navbar'

import CheckOut from './CheckOut'
import ItemList from './ItemList'
const Home = ({handleAdd,Data,notify}) => {
    
  return (
    <div>
        {notify && <p className='fixed bg-[green] top-0 z-10 ease-in-out duration-500 w-full p-7 text-white'>Successfully added to cart</p>}
        <div className='mt-24 p-4 grid grid-cols-2 col-span-2 gap-x-4 gap-y-5 md:gap-x-10 md:gap-y-6 md:grid-cols-3'>
            {Data.map((data,index) => {
                return(
                    <div key={data.id} className="p-3 rounded shadow-sm shadow-slate-500 hover:scale-105 duration-500 hover:ease-in-out ">
                       <ItemList data={data} handleAdd={handleAdd}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Home