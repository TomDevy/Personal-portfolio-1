import NavBar from './Components/Head/NavBar'
import About from './Components/AboutPage/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import HeroPage from './Components/HeroPage/HeroPage'


import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path='/' index element={<HeroPage/>}>
          </Route>
          <Route path='/about' element={<About />}>
          </Route>
          <Route path='/skills' element={<Skills />}>
          </Route>
          <Route path='/work' element={<Projects />}>
          </Route>
          <Route path='/contact' element={<Contact />}>
          </Route>
          {/* <div className='md:ml-24 ml-20'>
          </div> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
