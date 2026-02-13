import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar2() {

     let navigate = useNavigate()

  return (
    <div className='py-2 px-5 bg-cyan-700'>
        <button onClick={()=>{
        navigate('/')
      }} className='bg-orange-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        Return to Home Page
        </button>

      <button onClick={() => {
        navigate(-1)
      }} className='bg-orange-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        Back
        </button>

      <button onClick={() => {
        navigate(+1)
      }} className='bg-orange-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
        Next
        </button>
    </div>
  )
}

export default Navbar2