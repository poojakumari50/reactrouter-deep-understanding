import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './pages/Contact'
import NotFound from './Pages/NotFound'
import Footer from './Components/Footer'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'
import Navbar2 from './Components/Navbar2'

function App() {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
       <Route path='/' element={<Home />} />

       <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
           <Route path='kids' element={<Kids />} />
       </Route>

       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='*' element={<NotFound />} />
       
       <Route path='/courses' element={<Courses/>} />
       <Route path='/courses/:courseId' element={<CourseDetails/>} />

   {/* <Route path='/product/men' element={<Men />} />
       <Route path='product/women/' element={<Women />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App