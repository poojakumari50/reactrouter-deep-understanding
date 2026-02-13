import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center py-4 px-8 bg-cyan-900 justify-between'>
        <h2 className='text-2xl font-bold'>ReactRouter</h2>
        <div className='flex gap-10'>
            <Link className='text-lg font-bold' to='/'>Home</Link>
            <Link className='text-lg font-bold' to='/courses'>Courses</Link>
            <Link className='text-lg font-bold' to='/product'>Product</Link>
            <Link className='text-lg font-bold' to='/about'>About</Link>
            <Link className='text-lg font-bold' to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar