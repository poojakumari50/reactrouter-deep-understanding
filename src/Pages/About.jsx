import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

 // let navigate = useNavigate()

  // const btnClicked = () => {
  //   navigate('/')
  // }

  return (
    <div>

      {/* <button onClick={()=>{
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
        </button> */}


      {/* <button onClick={btnClicked} className='bg-orange-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return to Home Page</button> */}
      <h1>About</h1> 
    </div>
  )
}

export default About 