import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import DetailView from './pages/DetailView'
import Navbars from './components/Navbars'

const App = () => {
  return (
    <>
      <header>
        <div className='py-8 container mx-auto'>
          <h1 className='text-6xl mb-8'>
            <Link to={'/'}>
              Restaurants
            </Link>
          </h1>
          <p className='text-xl w-3/5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, aperiam. Odit distinctio ex recusandae eius pariatur numquam eos temporibus quidem, velit ab. Incidunt tempore eum ab inventore provident placeat reiciendis?</p>
        </div>
        <Navbars />
      </header>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/detail/:id' element={<DetailView />} />
      </Routes>
    </>
  )
}

export default App