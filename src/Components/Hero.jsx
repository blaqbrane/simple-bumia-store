// import React from 'react'
// import { useState } from 'react'
// import Home from './Home'
// import Navbar from './Navbar'
// const Hero = () => {
//     const[userCarts,setUserCarts] = useState([])
//     const[isopen,setIsopen] = useState(false)

//     const handleAdd =(new_cart)=>{
//         if(userCarts.indexOf(new_cart) !== -1) return;
//         setUserCarts([...userCarts, new_cart])
//     }
//     const cart_num =userCarts.length
//   return (
//     <div>
//         <Navbar cart_num={cart_num}/>
//         <Home handleAdd={handleAdd} userCarts={userCarts}/>
        
//     </div>
//   )
// }

// export default Hero