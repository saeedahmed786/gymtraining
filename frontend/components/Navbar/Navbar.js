import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <nav className='navbar flex justify-between items-center p-3 pb-4 bg-transparent'>
      <Link href="/" className='font-bold text-[32px] text-black'>GYMTRAINING</Link>
      <div className='flex gap-4 items-center'>
        <Link href="/signup" className='bg-[#005695] text-white p-2 rounded-md py-1 font-bold'>Sign Up</Link>
        <Link href="/login" className='text-black'>Log In</Link>
      </div>
    </nav>
  )
}

export default Navbar
